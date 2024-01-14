import { BadRequestException } from "@nestjs/common/exceptions";
import { User } from "src/users/user.entity";

export class Permission {
    static check(id: number, currentUser: User) {
        if (id === currentUser.id) return;
        if (currentUser.role === 'ADMIN') return;
        throw new BadRequestException('User can not perform ation')
    }
}