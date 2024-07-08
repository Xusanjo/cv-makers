import { Module, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [TodoController],
  providers: [TodoService, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
    useClass: ValidationPipe
  }],
})
export class TodoModule {}
