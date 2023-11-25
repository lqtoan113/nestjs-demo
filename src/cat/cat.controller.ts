import { Body, Controller, Get, Post, Param, Put, Delete, ParseIntPipe, ClassSerializerInterceptor, UseInterceptors, UseGuards } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO,UpdateCatDTO } from './dto/cat.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { AuthGuard } from 'src/guard/auth.guard';
@Controller('cats')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(LoggingInterceptor)
export class CatController {
    constructor(private catService: CatService) { };
    // request >> middleware >> guard >> interceptor >> response
    @Get()  // localhost:3000/cat
    // @UseGuards(AuthGuard)
    getAllCat() {
        console.log('Second');   
        return this.catService.findAllCat();
    }
    @Post()
    createCat(@Body() createCatDto: CreateCatDTO) {
        // const currentDate = new Date();
        // createCatDto.createDate = currentDate;
        // createCatDto.updateDate = currentDate;
        return this.catService.createCat(createCatDto)
    }
    @Get(':id')
    findCatById(@Param('id', ParseIntPipe) id: number) {
        return this.catService.findById(id);
    }
    @Put(':id')
    updateCatById(@Param('id', ParseIntPipe) id: number, @Body() updateCatDto: UpdateCatDTO) {
        return this.catService.updateById(id, updateCatDto)
    }
    @Delete(':id')
    deleteCatById(@Param('id', ParseIntPipe) id: number) {
        return this.catService.deleteById(id)
    }
}
