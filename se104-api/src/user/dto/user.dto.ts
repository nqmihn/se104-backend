import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsDateString, IsEmail, IsEnum, IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
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

    @IsOptional()
    @IsEnum(Role)
    @ApiProperty({enum: Role})
    role: Role

}

export class UpdateUserDto {
    name: string

    phoneNumber: string

    @IsOptional()
    @IsDateString()
    birth: Date

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

