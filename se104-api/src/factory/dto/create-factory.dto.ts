import { IsNotEmpty } from "class-validator";

export class CreateFactoryDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    country: string
}
