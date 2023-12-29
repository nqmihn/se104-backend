import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @Min(1, { message: "Price must be greater than 0" })
    price: number

    @IsNotEmpty()
    @Min(1, { message: "Quantity must be greater than 0" })
    quantity: number
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    factoryId: number

    @IsNotEmpty()
    shopId: number

    @IsNotEmpty()
    typeId: number

    image:string

}
