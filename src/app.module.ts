import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat/cat.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '123',
    database: 'cat',
    entities: [Cat],
    synchronize: true,
    options: {
      encrypt: false, // Disable SSL
    }
  }), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
