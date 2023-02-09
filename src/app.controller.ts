import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import RegisterDto from './register.dto';
import User from './user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/register')
  async registerUser(@Body() newUser: RegisterDto) {
    const userRepo = this.dataSource.getRepository(User);
    if (!newUser.registrationDate) {
      newUser.registrationDate = new Date();
    }
    await userRepo.save(newUser);
    return newUser;
  }
}
