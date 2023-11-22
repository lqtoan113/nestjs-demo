import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



// Request -> Controller -> Service -> Controller -> Repository

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Decorator Get(), Post(), Put(), Delete()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hi')
  getHi(){
    return 'Hi there!';
  }
  // @Get('/calc')
  // getCalc(){
  //   return this.appService.calc();
  // }
}
