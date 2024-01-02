import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryVoucherService } from './delivery-voucher.service';
import { CreateDeliveryVoucherDto } from './dto/create-delivery-voucher.dto';
import { UpdateDeliveryVoucherDto } from './dto/update-delivery-voucher.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("deliveryVoucher")
@Controller('delivery-voucher')
export class DeliveryVoucherController {
  constructor(private readonly deliveryVoucherService: DeliveryVoucherService) { }

  @Post()
  create(@Body() createDeliveryVoucherDto: CreateDeliveryVoucherDto) {
    return this.deliveryVoucherService.create(createDeliveryVoucherDto);
  }

  @Get()
  findAll() {
    return this.deliveryVoucherService.findAll();
  }
  @Get('available')
  findAllAvailable() {
    return this.deliveryVoucherService.findAllAvailable();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.deliveryVoucherService.findOne(+id)
  }
  @Delete()
  remove(@Body('id') id: string) {
    return this.deliveryVoucherService.remove(+id);
  }
}
