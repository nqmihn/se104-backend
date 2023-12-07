import { PartialType } from '@nestjs/swagger';
import { CreateTypeProductDto } from './create-type-product.dto';

export class UpdateTypeProductDto extends PartialType(CreateTypeProductDto) {}
