import { Module } from '@nestjs/common';
import { TypeProductService } from './type-product.service';
import { TypeProductController } from './type-product.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TypeProductController],
  providers: [TypeProductService, PrismaService],
})
export class TypeProductModule { }
