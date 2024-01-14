import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private userService: UserService) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    console.log('1')
   
    try {
      const request = context.switchToHttp().getRequest();

      // get token from header
      const token = request.headers.authorization.split(' ')[1];
      // jwtVerify
      if (!token) {
        throw new ForbiddenException('Please provide access token');
  
      }
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      // jwtVerify validate token
      const user = await this.userService.findByEmail(payload.email);
      if (!user) {
        throw new BadRequestException(
          'User not belong to token, please try again'
        );
      }
      // Assign user to request object
      request.currentUser = user;
      
    } catch (error) {
      console.log('error from auth guard', error);
      throw new ForbiddenException('Invalid token or exprired')
    }
    return true;
  }
}