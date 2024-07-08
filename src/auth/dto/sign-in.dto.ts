import { IsEmail,
    IsNotEmpty,
    IsString,
    Length
} from "class-validator";

export class SignInDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @Length(5, 10)
    password: string;
}