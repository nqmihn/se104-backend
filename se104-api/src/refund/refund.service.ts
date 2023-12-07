import { Injectable } from '@nestjs/common';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RefundService {
  constructor(private prismaService: PrismaService) { }
  create(createRefundDto: CreateRefundDto) {
    const { userId, billId, description } = createRefundDto
    return this.prismaService.refund.create({
      data: {
        userId,
        billId,
        description,
        status: "PENDING"
      }
    })
  }

  findAll() {
    return this.prismaService.refund.findMany();
  }

  findOne(id: number) {
    return this.prismaService.refund.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateRefundDto: UpdateRefundDto) {
    return this.prismaService.refund.update({
      where: {
        id
      }, data: updateRefundDto
    });
  }

  remove(id: number) {
    return this.prismaService.refund.delete({ where: { id } });
  }
}
