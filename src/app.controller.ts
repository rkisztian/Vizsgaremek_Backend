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
import User from './Entity/user.entity';
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
