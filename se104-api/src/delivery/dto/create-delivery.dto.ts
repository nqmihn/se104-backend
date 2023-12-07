import { IsNotEmpty } from "class-validator";

export class CreateDeliveryDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    price: number
}
