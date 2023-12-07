import { Injectable } from '@nestjs/common';
import { CreateTypeProductDto } from './dto/create-type-product.dto';
import { UpdateTypeProductDto } from './dto/update-type-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TypeProductService {
  constructor(private prismaService: PrismaService) { }
  create(createTypeProductDto: CreateTypeProductDto) {
    return this.prismaService.typeProduct.create({ data: createTypeProductDto })
  }

  findAll() {
    return this.prismaService.typeProduct.findMany();
  }

  findOne(id: number) {
    return this.prismaService.typeProduct.findUnique({where: {
      id
    }});
  }

  update(id: number, updateTypeProductDto: UpdateTypeProductDto) {
    return `This action updates a #${id} typeProduct`;
  }

  remove(id: number) {
    return this.prismaService.typeProduct.delete({
      where: {
        id
      }
    });
  }
}
