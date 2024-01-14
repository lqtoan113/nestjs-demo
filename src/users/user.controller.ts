import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrenUser } from './decorator/currentUser.decorator';
import { User } from './user.entity';
import { RoleGuard } from 'src/guards/role.guard';

@Controller('/api/v1/user')
@UseInterceptors(ClassSerializerInterceptor)
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
    @UseGuards(new RoleGuard(['admin','user']))
    @UseGuards(AuthGuard)
    getAllUser(){
        return this.userService.findAllUser();
    }
    @Get('/current-user')
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrenUser() currentUser: User){
        return currentUser;
    }
    @Put('/:id')
    @UseGuards(new RoleGuard(['admin','user']))
    @UseGuards(AuthGuard)
    updateUserById(@Param('id', ParseIntPipe) id: number,@Body() requestBody: UpdateUserDTO,@CurrenUser() currenUser:User){
        return this.userService.updateUserById(id,requestBody,currenUser);
    }
    @Delete('/:id')
    @UseGuards(new RoleGuard(['admin']))
    @UseGuards(AuthGuard)
    deleteUserById(@Param('id', ParseIntPipe) id: number,@CurrenUser() currenUser) {
        return this.userService.deleteById(id,currenUser);
    }
}
