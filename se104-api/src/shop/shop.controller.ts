import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("shop")
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) { }

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.shopService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopService.update(+id, updateShopDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.shopService.remove(+id);
  }
}
