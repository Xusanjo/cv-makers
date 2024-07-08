import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto'; 
import { UserService } from 'src/user/user.service';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {}

  signUp(signUpDto: SignUpDto) {
    return this.userService.signUp(signUpDto);
  }

  signIn(signInDto: SignInDto){
    return this.userService.signIn(signInDto);
  }

  refreshToken(refreshTokenDto: Record<string, any>){
    return "Ok";
  }

  findAll(){
    return `This astion returns all auth`;
  }

  findOne(id: number){
    return `This action returns a #${id} auth`;
  }

  update(updateAuthDto: Record<string, any>){
    return `This action updates auth`;
  }

  remove(id: number){
    return `This action removes a #${id} auth`;
  }
}
