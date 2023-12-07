import { IsNotEmpty } from "class-validator";

export class CreateShopDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    userId: number
}
