import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";
import { UserController } from './user.Controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService,AuthService, ConfigService],
  exports: [UserService],
})
export class UserModule {}
