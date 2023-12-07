import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopVoucherService } from './shop-voucher.service';
import { CreateShopVoucherDto } from './dto/create-shop-voucher.dto';
import { UpdateShopVoucherDto } from './dto/update-shop-voucher.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("shopVoucher")
@Controller('shop-voucher')
export class ShopVoucherController {
  constructor(private readonly shopVoucherService: ShopVoucherService) { }

  @Post()
  create(@Body() createShopVoucherDto: CreateShopVoucherDto) {
    return this.shopVoucherService.create(createShopVoucherDto);
  }

  @Get()
  findAll() {
    return this.shopVoucherService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.shopVoucherService.findOne(+id)
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.shopVoucherService.remove(+id);
  }
}
