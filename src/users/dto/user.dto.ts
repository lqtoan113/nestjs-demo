import { IsEmail, IsNotEmpty } from "class-validator";
import { ROLES } from "src/enum/role.enum";

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
export class UpdateUserDTO{
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    role:ROLES;
}