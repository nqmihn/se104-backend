import { PartialType } from '@nestjs/swagger';
import { CreateShopVoucherDto } from './create-shop-voucher.dto';

export class UpdateShopVoucherDto extends PartialType(CreateShopVoucherDto) {}
