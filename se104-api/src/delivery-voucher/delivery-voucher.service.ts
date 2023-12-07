import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDeliveryVoucherDto } from './dto/create-delivery-voucher.dto';
import { UpdateDeliveryVoucherDto } from './dto/update-delivery-voucher.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeliveryVoucherService {
  constructor(private prismaService: PrismaService) { }
  async create(createDeliveryVoucherDto: CreateDeliveryVoucherDto) {
    const isValidDeliveryId = await this.prismaService.delivery.findUnique({
      where: {
        id: createDeliveryVoucherDto.deliveryId
      }
    })
    if (!isValidDeliveryId) {
      throw new BadRequestException("Invalid deliveryId")
    }
    return this.prismaService.deliveryVoucher.create({ data: createDeliveryVoucherDto });
  }

  findAll() {
    return this.prismaService.deliveryVoucher.findMany();
  }

  findOne(id: number) {
    return this.prismaService.deliveryVoucher.findUnique({ where: { id } });
  }

  update(id: number, updateDeliveryVoucherDto: UpdateDeliveryVoucherDto) {
    return `This action updates a #${id} deliveryVoucher`;
  }

  remove(id: number) {
    return this.prismaService.deliveryVoucher.delete({ where: { id } });
  }
}
