import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @IsString()
    @IsNotEmpty({
        message: "Name is required"
    })
    name: string
}
