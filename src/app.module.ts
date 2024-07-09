import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TodoModule, UserModule, AuthModule, ConfigModule.forRoot({envFilePath:".env", isGlobal:true})],
  controllers: [],
  // providers: [],
})
export class AppModule {}
