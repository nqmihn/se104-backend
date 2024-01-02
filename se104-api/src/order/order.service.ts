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
    let deliveryVoucher = null
    if (userOrder.deliveryVoucherId) {
      deliveryVoucher = await this.prismaService.deliveryVoucher.findUnique({
        where: {
          id: userOrder.deliveryVoucherId
        }
      })

    }
    const totalPrice = productPrice + deliveryPrice - (deliveryVoucher ? deliveryPrice * deliveryVoucher.discount / 100 : 0)
    const order = await this.prismaService.bill.create({
      data: {
        userId,
        productPrice,
        deliveryPrice,
        totalPrice,
        name: userOrder.name,
        address: userOrder.address,
        phoneNumber: userOrder.phoneNumber,
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
          shopId: detailBill.shopId,
          shopVoucherId: detailBill.shopVoucherId ? detailBill.shopVoucherId : undefined,
          status: "PENDING"
        }
      })
      const product = await this.prismaService.product.findUnique({
        where: {
          id: detailBill.productId,
        }
      })
      await this.prismaService.product.update({
        where: {
          id: detailBill.productId
        }, data: {
          quantity: product.quantity - detailBill.quantity
        }
      })
    }))
    return "Order Success!"
  }
  getByUser(userId: number) {
    return this.prismaService.bill.findMany({
      where: {
        userId
      },
      include: {
        user: {
          select: {
            name: true
          }
        },
        billDetail: {
          include: {
            product: {
              include: {
                shop: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }
  getDetail(userId: number) {
    return this.prismaService.bill.findMany({
      where: {
        userId
      },
      include: {
        billDetail: true
      }
    })
  }
  findAll() {
    return "This action returns all order";
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
  findByShop(shopId: number) {
    return this.prismaService.billDetail.findMany({
      where: {
        shopId
      },
      include: {
        product: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async update(id: number, status: string) {
    const arrayStatus: string[] = Object.values(Status)
    const isValidStatus = arrayStatus.find(s => s === status)
    if (!isValidStatus) {
      throw new BadRequestException(`Status must be in [${arrayStatus}]`)
    }

    return this.prismaService.billDetail.updateMany({
      where: {
        id,
      }, data: {
        status: status as Status
      }
    })
  }

  remove(id: number) {
    return "This action removes a #${id} order";
  }
}
