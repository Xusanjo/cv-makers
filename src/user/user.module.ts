import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";
import { UserController } from './user.Controller';

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService, ConfigService, JwtService],
  exports: [UserService, JwtService],
})
export class UserModule {}
