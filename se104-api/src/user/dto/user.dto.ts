import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "Email không được để trống" })
    @IsEmail()
    email: string

    @IsNotEmpty({ message: "Mật khẩu không được để trống" })
    password: string

    @IsNotEmpty({ message: "Tên không được để trống" })
    name: string

    @IsNotEmpty({ message: "Số điện thoại không được để trống" })
    phoneNumber: string

    @IsNotEmpty({ message: "Ngày sinh không được để trống" })
    @IsDateString()
    birth: Date

    address: string;

    @IsOptional()
    @IsEnum(Role)
    @ApiProperty({ enum: Role })
    role: Role

}

export class UpdateUserDto {

    @IsOptional()
    name: string

    @IsOptional()
    phoneNumber: string

    @IsOptional()
    @IsDateString()
    birth: Date

    @IsOptional()
    address: string;

    @IsOptional()
    @IsEnum(Role)
    role: Role

}

export class RegisterUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    @IsDateString()
    birth: Date

    address: string;



}

