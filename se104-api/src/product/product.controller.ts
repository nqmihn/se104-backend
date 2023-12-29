import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueryString } from './product.interface';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("product")
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Post('all')
  findAll(@Query() q: ProductQueryString, @Body('shopId') shopId:string) {
    return this.productService.findAll(q, +shopId);
  }

  @Get(':id')
  findByShopId(@Param('id') id: string) {
    return this.productService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.productService.remove(+id);
  }
}
