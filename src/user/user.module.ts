import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from 'src/middlewares/logging.middleware';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  }),],
  controllers: [UserController],
  providers: [UserService, AuthService]
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
