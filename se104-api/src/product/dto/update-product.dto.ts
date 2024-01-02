import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, Min } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @Min(1, { message: "Giá phải lớn hơn 0" })
    price: number

    @IsOptional()
    @Min(1, { message: "Số lượng phải lớn hơn 0" })
    quantity: number

    description: string

    @IsOptional()
    image: string
}
