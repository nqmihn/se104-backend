import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { FactoryService } from './factory.service';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("factory")
@Controller('factory')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) { }

  @Post()
  create(@Body() createFactoryDto: CreateFactoryDto) {
    return this.factoryService.create(createFactoryDto);
  }

  @Get()
  findAll(@Query('name') qName: string, @Query('country') qCountry: string) {
    return this.factoryService.findAll(qName, qCountry);
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.factoryService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFactoryDto: UpdateFactoryDto) {
    return this.factoryService.update(+id, updateFactoryDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.factoryService.remove(+id);
  }
}
