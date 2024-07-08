import { IsEmail, IsString, MinLength } from "class-validator";


export class CreateTodoDto {
    @IsString()
    @MinLength(5)
    name: string

    @IsString({
        message: 'this is required'
    })
    @MinLength(3)
    username: string

    @IsString()
    @MinLength(3)
    password: string

    @IsEmail()
    email: string
}
