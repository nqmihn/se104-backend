import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RefundService } from './refund.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("refund")
@Controller('refund')
export class RefundController {
  constructor(private readonly refundService: RefundService) { }

  @Post()
  create(@Body() createRefundDto: CreateRefundDto) {
    return this.refundService.create(createRefundDto);
  }

  @Get()
  findAll() {
    return this.refundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRefundDto: UpdateRefundDto) {
    return this.refundService.update(+id, updateRefundDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.refundService.remove(+id);
  }
}
