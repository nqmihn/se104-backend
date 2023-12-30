import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prismaService: PrismaService) { }
  async create(createShopDto: CreateShopDto) {
    const { userId, name, phoneNumber, address } = createShopDto
    const user = await this.prismaService.user.findUnique({
      where: {
        id: +userId
      }
    })
    const userBirth = user.birth.getTime()
    const today = new Date().getTime()
    const userAge = Math.floor(Math.abs(today - userBirth) / (1000 * 60 * 60 * 24 * 365))
    if (userAge <= 17) {
      throw new BadRequestException("User must be older than 17 years old to open a shop! ")
    }
    const existShop = await this.prismaService.shop.findUnique({
      where: {
        userId: +userId
      }
    })
    if (existShop) {
      throw new BadRequestException("User has opened shop already!")
    }
    const existName = await this.prismaService.shop.findUnique({
      where: {
        name
      }
    })
    if (existName) {
      throw new BadRequestException("Name has been used")
    }
    await this.prismaService.shop.user({
      where: {
        userId:+userId
      }, data: {
        role: "SELLER"
      }
    })
    return await this.prismaService.shop.create({
      data: {
        userId: +userId,
        name,
        phoneNumber,
        address
      }
    })
  }

  findAll() {
    return this.prismaService.shop.findMany();
  }

  findOne(id: number) {
    return this.prismaService.shop.findUnique({where: {
      id
    }});
  }
  findByUser(userId: number) {
    return this.prismaService.shop.findUnique({where: {
      userId
    }});
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    const { name } = updateShopDto
    if (name) {
      const shop = await this.prismaService.shop.findUnique({
        where: {
          name
        }
      })
      if (shop) {
        if (shop.id !== id) {
          throw new BadRequestException("Name has been used")
        }
      }
    }

    return await this.prismaService.shop.update({
      where: {
        id
      }, data: updateShopDto
    })
  }

  remove(id: number) {
    return this.prismaService.shop.delete({ where: { id } });
  }
}
