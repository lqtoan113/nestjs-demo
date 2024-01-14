import { BadRequestException, Injectable, NotFoundException, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDTO, UpdateUserDTO } from './dto/user.dto';
import { Permission } from 'src/helpers/checkPermission.helper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    registerUser(registerUserDto: RegisterUserDTO) {
        // const currentDate = new Date();
        // createCatDto.createDate = currentDate;
        // createCatDto.updateDate = currentDate;
        const user = this.userRepository.create(registerUserDto);
        return this.userRepository.save(user);
    }
    findByEmail(email: string) {
        return this.userRepository.findOneBy({ email });
    }
    findAllUser() {
        return this.userRepository.find();

    }
    findById(id: number) {
        return this.userRepository.findOneBy({ id });
    }
    async updateUserById(id: number, updateUserDto: UpdateUserDTO, currentUser: User) {

        if (updateUserDto.role) {
            throw new BadRequestException('You cannot change role')
        }

        let user = await this.findById(id);
        if (!user) {
            throw new NotFoundException('User does not exist');
        }
        // const currentDate = new Date();
        // updateCatDto.updateDate = currentDate;

        //check User
        Permission.check(id, currentUser)
        // hash password
        const hashPassword = await bcrypt.hash(updateUserDto.password, 10);
        updateUserDto.password = hashPassword;

        user = { ...user, ...updateUserDto };


        const updateUser = await this.userRepository.save(user);
        return {
            firstName: updateUser.firstName,
            lastName: updateUser.lastName,
            email: updateUser.email,
        };
    }
    async deleteById(id: number,currentUser: User) {
        let user = await this.findById(id);
         //check User
         Permission.check(id, currentUser)
        if (!user) {
            throw new NotFoundException('User does not exist');
        }
        user.isActive = false;
        return this.userRepository.save(user);
    }

}
