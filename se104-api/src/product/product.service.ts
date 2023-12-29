import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { ProductQueryString } from './product.interface';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) { }
  async create(createProductDto: CreateProductDto) {
    const isExistFactory = await this.prismaService.factory.findUnique({
      where: {
        id: createProductDto.factoryId
      }
    })
    if (!isExistFactory) {
      throw new BadRequestException("Invalid factoryId")
    }
    const isExistShop = await this.prismaService.shop.findUnique({
      where: {
        id: createProductDto.shopId
      }
    })
    if (!isExistShop) {
      throw new BadRequestException("Invalid shopId")
    }
    const isExistType = await this.prismaService.typeProduct.findUnique({
      where: {
        id: createProductDto.typeId
      }
    })
    if (!isExistType) {
      throw new BadRequestException("Invalid typeId")
    }
    const isExistName = await this.prismaService.product.findFirst({
      where: {
        name: createProductDto.name
      }
    })
    if (isExistName && isExistName.shopId === createProductDto.shopId) {
      throw new BadRequestException("Product is exist in this shop")
    }
    return this.prismaService.product.create({ data: createProductDto })
  }

  async findAll(q: ProductQueryString, shopId:number) {
    if (!q.sort) {
      q.sort = '0'
    }

    return this.prismaService.product.findMany({
      where: {
        shopId,
        name: {
          contains: q.name ? q.name : ''
        },
        price: {
          lte: q.price ? +q.price : undefined
        },
        quantity: {
          gte: q.quantity ? +q.quantity : 0
        },
        typeId: q.typeId ? +q.typeId : undefined,

      },
      orderBy: {
        createdAt: +q.sort === 0 ? 'desc' : 'asc'
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id
      },
      data: updateProductDto
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({ where: { id } });
  }
}
