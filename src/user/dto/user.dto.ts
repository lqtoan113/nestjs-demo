import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterUserDTO {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;

}
export class LoginUserDTO {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}