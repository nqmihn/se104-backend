import { IsNotEmpty } from "class-validator";

export class CreateTypeProductDto {
    @IsNotEmpty()
    name: string
}
