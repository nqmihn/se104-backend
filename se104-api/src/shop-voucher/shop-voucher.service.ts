import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateShopVoucherDto } from './dto/create-shop-voucher.dto';
import { UpdateShopVoucherDto } from './dto/update-shop-voucher.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShopVoucherService {
  constructor(private prismaService: PrismaService) { }
  async create(createShopVoucherDto: CreateShopVoucherDto) {
    const isValidShopId = await this.prismaService.shop.findUnique({
      where: {
        id: createShopVoucherDto.shopId
      }
    })
    if (!isValidShopId) {
      throw new BadRequestException("Invalid shopId")
    }
    return this.prismaService.shopVoucher.create({ data: createShopVoucherDto });
  }

  findAll() {
    return this.prismaService.shopVoucher.findMany();
  }
  findAllAvailable() {
    return this.prismaService.shopVoucher.findMany({
      where: {
        expireIn: {
          gte: new Date()
        }
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.shopVoucher.findUnique({ where: { id } });
  }

  update(id: number, updateShopVoucherDto: UpdateShopVoucherDto) {
    return `This action updates a #${id} shopVoucher`;
  }

  remove(id: number) {
    return this.prismaService.shopVoucher.delete({
      where: {
        id
      }
    });
  }
}
