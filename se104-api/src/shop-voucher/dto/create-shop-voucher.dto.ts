import { IsDateString, IsNotEmpty, Max, Min } from "class-validator"

export class CreateShopVoucherDto {
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    @Min(1)
    @Max(100)
    discount: number

    @IsNotEmpty()
    @IsDateString()
    expireIn: Date

    @IsNotEmpty()
    shopId: number
}
