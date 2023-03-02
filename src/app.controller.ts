import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { DataSource, EntityNotFoundError } from 'typeorm';
import { AppService } from './app.service';
import RegisterDto from './register.dto';
import User from './user.entity';
import { AuthGuard } from '@nestjs/passport/dist';
import * as bcrypt from 'bcrypt';

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
    if (newUser.password !== newUser.passwordAgain) {
      throw new BadRequestException('A két jelszónak egyeznie kell!');
    }
    newUser.password = await bcrypt.hash(newUser.password, 10);
    await userRepo.save(newUser);
    return newUser.registrationDate;
  }

  @Get('profile')
  @UseGuards(AuthGuard('bearer'))
  ownProfile(@Request() req) {
    const user: User = req.user;
    return {
      email: user.email,
      username: user.username,
      registDate: user.registrationDate,
    };
  }
}
