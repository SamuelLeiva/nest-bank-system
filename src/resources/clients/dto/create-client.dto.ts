import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateClientDto {
    @IsString()
    @IsNotEmpty({
        message: "Name is required."
    })
    name: string

    @IsString()
    @IsNotEmpty({
        message: "Name is required."
    })
    @MinLength(8, {
        message: "Password must have at least 8 characters"
    })
    password: string

    @IsInt()
    @IsNotEmpty({
        message: "Income is required."
    })
    income: number

    @IsString()
    @IsNotEmpty({
        message: "City is required."
    })
    city: string

    @IsInt()
    @IsNotEmpty({
        message: "Age is required."
    })
    age: number

    @IsInt()
    @IsNotEmpty({
        message: "CountryId is required."
    })
    countryId: number
}
