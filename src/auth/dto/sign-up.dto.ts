import { Exclude } from "class-transformer";
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Length
} from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 10)
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(5,10)
    @Exclude()
    passwprd: string;
}