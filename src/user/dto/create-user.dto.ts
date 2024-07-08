import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(5)
    name: string

    @IsString({
        message: 'this is required'
    })
    @MinLength(3)
    usernmae: string

    @IsString()
    @MinLength(3)
    password: string

    @IsEmail()
    email: string
}
