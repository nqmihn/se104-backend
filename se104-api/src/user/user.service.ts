import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, RegisterUserDto, UpdateUserDto } from './dto/user.dto';
import { genSaltSync, hashSync, compareSync } from "bcrypt";
@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }
    getHashPassword = (password: string) => {
        const salt = genSaltSync(10);
        const hash = hashSync(password, salt)
        return hash
    }
    async comparePassword(password: string, hash: string) {
        return compareSync(password, hash)
    }
    async create(user: CreateUserDto) {
        const isExist = await this.prismaService.user.findUnique({
            where: {
                email: user.email
            }
        })
        if (isExist) {
            throw new BadRequestException("Email has been used ! ")
        }
        user.password = this.getHashPassword(user.password)
        return await this.prismaService.user.create({ data: user })
    }
    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.prismaService.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        })
    }
    async delete(id: number) {
        return await this.prismaService.user.delete({
            where: {
                id
            }
        })
    }

    findOne(id: number) {
        return this.prismaService.user.findUnique({
            where: {
                id
            }
        })
    }
    findAll() {
        return this.prismaService.user.findMany()
    }
    findByEmail(email: string) {
        return this.prismaService.user.findUnique({
            where: {
                email
            }
        })
    }
    async register(registerUser: RegisterUserDto) {
        const { email, name, password, address, phoneNumber, birth } = registerUser
        const isExist = await this.prismaService.user.findUnique({
            where: {
                email: registerUser.email
            }
        })
        if (isExist) {
            throw new BadRequestException("Email has been used ! ")
        }


        return await this.prismaService.user.create({
            data: {
                email,
                name,
                password: this.getHashPassword(password),
                address,
                phoneNumber,
                birth,
                role: "USER"
            }
        })
    }
    async changePassword(password: string, newPassword: string, userId: number) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } })
        if (user) {
            const isValidPassword = await this.comparePassword(password, user.password)
            if (isValidPassword) {
                await this.prismaService.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        password: this.getHashPassword(newPassword)
                    }
                })
                return "Change Password Success"
            } else {
                throw new UnauthorizedException("Invalid Current Password!")
            }
        }
    }
}
