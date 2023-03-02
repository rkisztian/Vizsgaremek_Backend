import {
  Controller,
  Body,
  Post,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import User from 'src/user.entity';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import LoginDto from './login.dto';
import RegisterDto from './register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    const userRepo = this.dataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email: loginData.email });
    if (user === null) {
      throw new UnauthorizedException('Hibás email vagy jelszó');
    }
    if (!(await bcrypt.compare(loginData.password, user.password))) {
      throw new UnauthorizedException('Hibás email vagy jelszó');
    }

    return {
      token: await this.authService.generateTokenFor(user),
    };

    //logout = token törlése

    //register helye:
  }

  @Post('register')
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
}
