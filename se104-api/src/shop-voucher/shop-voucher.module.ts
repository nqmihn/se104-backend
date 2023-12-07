import { Module } from '@nestjs/common';
import { ShopVoucherService } from './shop-voucher.service';
import { ShopVoucherController } from './shop-voucher.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ShopVoucherController],
  providers: [ShopVoucherService,PrismaService],
})
export class ShopVoucherModule {}
