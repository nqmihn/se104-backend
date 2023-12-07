import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateShopDto } from './create-shop.dto';

export class UpdateShopDto {
    name: string
    phoneNumber: string
    address: string
}
