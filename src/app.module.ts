import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat } from './cats/cat.entity';
import { CatModule } from './cats/cat.module';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';
import { PostModule } from './posts/post.module';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'sa',
    //   password: '123',
    //   database: 'nestjs_demo',
    //   entities: [Cat, User],
    //   synchronize: true,
    //   options: {
    //     encrypt: false, // Disable SSL
    //   },
    // }),

    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Cat, User], // Thêm các entities cần thiết
        synchronize: true,
        options: {
          encrypt: false, // Disable SSL
        },
      }),
      inject: [ConfigService],
    }),
    CatModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
