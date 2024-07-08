import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { logginInterceptor} from "./logginInterceptor";
import { Logger } from "@nestjs/common";

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Get("healthcheck")
  healthCheck(): string {
    this.logger.error("Salom dunyo xatosi");
    return "cool";
  }

  @Post("signup")
  signup(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post("signin")
  signin(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post("refresh")
  refresh(@Body() refreshTokenDto: Record<string, any>) {
    return this.authService.refreshToken(refreshTokenDto);
  }

  @Get("profile")
  prodile(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch('update')
  update(@Body() updateAuthDto: Record<string, any>) {
    return this.authService.update(updateAuthDto);
  }

  @Delete('logout')
  logout(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
