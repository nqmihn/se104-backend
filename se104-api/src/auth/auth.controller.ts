import { Body, Controller, Post, Put, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) { }
    @Post('login')
    async handleLogin(@Body('email') email: string, @Body('password') password: string) {
        const user = await this.userService.findByEmail(email)
        if (user) {
            const isValidPassword = await this.userService.comparePassword(password, user.password)
            if (isValidPassword) {
                return {
                    message: "Login Success",
                    data: user
                }
            }
        }
        throw new UnauthorizedException("Invalid Email/Password !")
    }
    @Post('register')
    handleRegister(@Body() registerUser: RegisterUserDto) {
        return this.userService.register(registerUser)
    }
    @Put('change-password')
    handleChangePassword(@Body("password") password: string, @Body("newPassword") newPassword: string, @Body('userId') userId: string) {
        return this.userService.changePassword(password, newPassword, +userId)
    }
}
