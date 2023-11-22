import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/middlewares/logging.middleware';



@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes( '*' );
  }
}
