import { Module } from '@nestjs/common';
import { FactoryService } from './factory.service';
import { FactoryController } from './factory.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FactoryController],
  providers: [FactoryService, PrismaService],
})
export class FactoryModule { }
