import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeliveryService {
  constructor(private prismaService: PrismaService) { }
  create(createDeliveryDto: CreateDeliveryDto) {
    return this.prismaService.delivery.create({ data: createDeliveryDto })
  }

  findAll() {
    return this.prismaService.delivery.findMany();
  }

  findOne(id: number) {
    return this.prismaService.delivery.findUnique({ where: { id } });
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return this.prismaService.delivery.update({
      where: {
        id
      },
      data: updateDeliveryDto
    });
  }

  remove(id: number) {
    return this.prismaService.delivery.delete({
      where: {
        id
      }
    });
  }
}
