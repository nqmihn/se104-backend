import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService, PrismaService],
})
export class DeliveryModule { }
