import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginUserDTO, RegisterUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('/api/v1/user')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService) { }
    @Post('/register')
    registerUser(@Body() requestBody: RegisterUserDTO) {
        return this.authService.register(requestBody);

    }
    @Post('/login')
    loginUser(@Body() requestBody: LoginUserDTO) {
        return this.authService.login(requestBody);
    }
    @Get()
    @UseGuards(AuthGuard)
    getAllUser(){
        return this.userService.findAllUser();
    }

}
