import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDTO, UpdateCatDTO } from './dto/cat.dto';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
    ) { }
    // CRUD
    createCat(createCatDto: CreateCatDTO) {
        // const currentDate = new Date();
        // createCatDto.createDate = currentDate;
        // createCatDto.updateDate = currentDate;
        const cat = this.catRepository.create(createCatDto);
        return this.catRepository.save(cat);
    }
    findAllCat() {
        return this.catRepository.find();
    }
    findById(id: number) {
        return this.catRepository.findOneBy({ id });
    }
    async updateById(id: number, updateCatDto: UpdateCatDTO) {
        let cat = await this.findById(id);
        if (!cat) {
            throw new NotFoundException('Cat does not exist');
        }
        // const currentDate = new Date();
        // updateCatDto.updateDate = currentDate;
        cat = { ...cat, ...updateCatDto };
        return this.catRepository.save(cat);
    }
    async deleteById(id: number) {
        let cat = await this.findById(id);
        if (!cat) {
            throw new NotFoundException('Cat does not exist');
        }
        cat.isActive =false;
        return this.catRepository.save(cat);
    }
}
