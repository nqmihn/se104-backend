import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, Min } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @Min(1, { message: "Price must be greater than 0" })
    price: number

    @IsOptional()
    @Min(1, { message: "Quantity must be greater than 0" })
    quantity: number
    description: string

    @IsOptional()
    image:string
}
