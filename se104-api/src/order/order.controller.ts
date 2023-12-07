import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserOrder } from './order.interface';
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
  @Get('detail/:billId')
  getBillDetail(@Param('billId') billId: string) {
    return this.orderService.getDatail(+billId)
  }
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('status') status: string) {
    return this.orderService.update(+id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
