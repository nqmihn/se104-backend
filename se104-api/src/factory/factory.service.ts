import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FactoryService {
  constructor(private prismaService: PrismaService) { }
  async create(createFactoryDto: CreateFactoryDto) {
    const isExist = await this.prismaService.factory.findUnique({
      where: {
        name: createFactoryDto.name
      }
    })
    if (isExist) {
      throw new BadRequestException("Factory has been created!")
    }
    return await this.prismaService.factory.create({ data: createFactoryDto })
  }

  findAll(qName: string, qCountry: string) {
    return this.prismaService.factory.findMany({
      where: {
        name: {
          contains: qName ? qName : ""
        },
        country: {
          contains: qCountry ? qCountry : ""
        }
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.factory.findUnique({ where: { id } });
  }

  async update(id: number, updateFactoryDto: UpdateFactoryDto) {
    const isExist = await this.prismaService.factory.findUnique({
      where: {
        name: updateFactoryDto.name
      }
    })
    if (isExist) {
      if (id !== isExist.id) {
        throw new BadRequestException("Factory's name has been used!")
      }
    }
    return await this.prismaService.factory.update({
      where: {
        id
      },
      data: updateFactoryDto
    })
  }
  async remove(id: number) {
    return await this.prismaService.factory.delete({
      where: {
        id
      }
    });
  }
}
