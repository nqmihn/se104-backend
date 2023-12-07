import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRefundDto } from './create-refund.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { RefundStatus } from '@prisma/client';

export class UpdateRefundDto {
    @IsOptional()
    @IsEnum(RefundStatus)
    @ApiProperty({ enum: RefundStatus })
    status: RefundStatus

    response: string
}
