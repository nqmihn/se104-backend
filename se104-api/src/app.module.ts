import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { FactoryModule } from './factory/factory.module';
import { ProductModule } from './product/product.module';
import { TypeProductModule } from './type-product/type-product.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryVoucherModule } from './delivery-voucher/delivery-voucher.module';
import { ShopVoucherModule } from './shop-voucher/shop-voucher.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { RefundModule } from './refund/refund.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), UserModule, ShopModule, FactoryModule, ProductModule, TypeProductModule, DeliveryModule, DeliveryVoucherModule, ShopVoucherModule, OrderModule, AuthModule, RefundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
