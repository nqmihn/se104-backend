import { Module } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundController } from './refund.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RefundController],
  providers: [RefundService,PrismaService],
})
export class RefundModule {}
