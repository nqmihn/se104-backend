import { PartialType } from '@nestjs/swagger';
import { CreateDeliveryVoucherDto } from './create-delivery-voucher.dto';

export class UpdateDeliveryVoucherDto extends PartialType(CreateDeliveryVoucherDto) {}
