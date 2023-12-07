import { IsNotEmpty } from "class-validator";

export class CreateRefundDto {
    @IsNotEmpty()
    userId: number

    @IsNotEmpty()
    billId: number

    @IsNotEmpty()
    description: string


}
