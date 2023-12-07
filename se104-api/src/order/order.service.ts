import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserOrder } from './order.interface';
import { PrismaService } from 'src/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) { }
  async create(userOrder: UserOrder) {
    const { userId, productPrice, deliveryPrice, detail } = userOrder
    if (!userOrder.address || !userOrder.phoneNumber) {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: userId
        }
      })
      if (!userOrder.address) {
        userOrder.address = user.address
      }
      if (!userOrder.phoneNumber) {
        userOrder.phoneNumber = user.phoneNumber
      }
    }

    const totalPrice = productPrice + deliveryPrice
    const order = await this.prismaService.bill.create({
      data: {
        userId,
        productPrice,
        deliveryPrice,
        totalPrice,
        address: userOrder.address,
        phoneNumber: userOrder.phoneNumber,
        status: "PENDING",
        deliveryId: userOrder.deliveryId,
        deliveryVoucherId: userOrder.deliveryVoucherId ? userOrder.deliveryVoucherId : undefined

      }
    })
    await Promise.all(detail.map(async detailBill => {
      await this.prismaService.billDetail.create({
        data: {
          billId: order.id,
          productId: detailBill.productId,
          price: detailBill.price,
          quantity: detailBill.quantity,
          shopVoucherId: detailBill.shopVoucherId ? detailBill.shopVoucherId : undefined
        }
      })
    }))
    return "Order Success!"
  }
  getByUser(userId: number) {
    return this.prismaService.bill.findMany({
      where: {
        userId
      }
    })
  }
  getDetail(billId: number) {
    return this.prismaService.bill.findUnique({
      where: {
        id: billId
      },
      include: {
        billDetail: true
      }
    })
  }
  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: number, status: string) {
    const arrayStatus: string[] = Object.values(Status)
    const isValidStatus = arrayStatus.find(s => s === status)
    if (!isValidStatus) {
      throw new BadRequestException(`Status must be in [${arrayStatus}]`)
    }

    return this.prismaService.bill.update({
      where: { id }, data: {
        status: status as Status
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
