import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDTO } from './dto/user.dto';

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
    findAllUser(){
        return this.userRepository.find();
    }
}
