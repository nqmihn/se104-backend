import { Module } from '@nestjs/common';
import { DeliveryVoucherService } from './delivery-voucher.service';
import { DeliveryVoucherController } from './delivery-voucher.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DeliveryVoucherController],
  providers: [DeliveryVoucherService,PrismaService],
})
export class DeliveryVoucherModule {}
