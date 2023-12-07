import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeProductService } from './type-product.service';
import { CreateTypeProductDto } from './dto/create-type-product.dto';
import { UpdateTypeProductDto } from './dto/update-type-product.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("typeProduct")
@Controller('type-product')
export class TypeProductController {
  constructor(private readonly typeProductService: TypeProductService) { }

  @Post()
  create(@Body() createTypeProductDto: CreateTypeProductDto) {
    return this.typeProductService.create(createTypeProductDto);
  }

  @Get()
  findAll() {
    return this.typeProductService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.typeProductService.findOne(+id)
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.typeProductService.remove(+id);
  }
}
