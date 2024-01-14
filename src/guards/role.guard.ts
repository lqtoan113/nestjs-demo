import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private role :string[]){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('2')
    const request = context.switchToHttp().getRequest();
    // console.log(request.currentUser)
    return this.role.includes(request.currentUser.role.toLowerCase());
  }
}