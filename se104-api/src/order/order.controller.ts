import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DashboardQuery, UserOrder } from './order.interface';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("order")
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  create(@Body() userOrder: UserOrder) {
    return this.orderService.create(userOrder);
  }

  @Get('by-user/:userId')
  getBillByUser(@Param('userId') userId: string) {
    return this.orderService.getByUser(+userId)
  }
  @Get('detail/:userId')
  getBillDetail(@Param('userId') userId: string) {
    return this.orderService.getDetail(+userId)
  }
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }
  @Get('shop/:shopId')
  findByShopId(@Param('shopId') shopId: string) {
    return this.orderService.findByShop(+shopId)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('status') status: string) {
    return this.orderService.update(+id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
  @Get('dashboard/:shopId')
  getOverview(@Param('shopId') shopId:string, @Query() query:DashboardQuery){
    return this.orderService.getOverview(+shopId,query)
  }
}
