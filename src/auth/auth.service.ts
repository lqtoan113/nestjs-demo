import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDTO, RegisterUserDTO } from "src/users/dto/user.dto";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) { }
    async register(requestBody: RegisterUserDTO) {
        // check email is exist
        const userByEmail = await this.userService.findByEmail(requestBody.email);
        if (userByEmail) {
            throw new BadRequestException('Email already exist! ');
        }
        // hash password
        const hashPassword = await bcrypt.hash(requestBody.password, 10);
        requestBody.password = hashPassword;
        // save to database
        const saveUser = await this.userService.registerUser(requestBody);
        //generate jwt token
        const payload = {
            id: saveUser.id,
            firstName: saveUser.firstName,
            lastName: saveUser.lastName,
            email:saveUser.email,
            role: saveUser.role,
        };
        const access_token = await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET,
        });
        return {
            msg: 'User has been registed!',
            access_token,
        }
    }
    async login(requestBody:LoginUserDTO){
        //check email
        const userByEmail = await this.userService.findByEmail(requestBody.email);
        if (!userByEmail) {
            throw new BadRequestException('Invalid credentials! ');
        }
        // check password
        const isMatchPassword =  await bcrypt.compare(requestBody.password,userByEmail.password);
        if(!isMatchPassword){
            throw new BadRequestException('Invalid credentials! ');
        }
        //generate jwt token
        const payload = {
            id: userByEmail.id,
            firstName: userByEmail.firstName,
            lastName: userByEmail.lastName,
            email:userByEmail.email,
            role: userByEmail.role,
        };
        const access_token = await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET,
        });
        return {
            msg: 'User has been login succesfully',
            access_token,
        }
    }
  
}