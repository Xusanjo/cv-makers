import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, ConfigService],
  exports: [AuthService],
})
export class AuthModule {}
