import { IsNotEmpty, IsNumber, Min, IsOptional } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @Min(1, { message: "Số lượng phải lớn hơn 0" })
    price: number

    @IsNotEmpty()
    @Min(1, { message: "Giá phải lớn hơn 0" })
    quantity: number
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    factoryId: number

    @IsNotEmpty()
    shopId: number

    @IsNotEmpty()
    typeId: number

    @IsOptional()
    image: string

}
