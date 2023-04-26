import {
  Controller,
  Body,
  Post,
  UnauthorizedException,
  BadRequestException,
  UseGuards,
  Delete,
  Headers,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import User from 'src/Entity/user.entity';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({
    description: 'Bejelentkezteti a felhasználót és egy tokent hozz létre',
  })
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
  }

  @UseGuards(AuthGuard('bearer'))
  @Post('finduser')
  async finduser(@Headers('authorization') authHeader: string) {
    const token = authHeader.split(' ')[1];
    return this.authService.findUserByToken(token);
  }

  @Post('register')
  @ApiOperation({
    description: 'Regisztrál egy új felhasználót.',
  })
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

  @UseGuards(AuthGuard('bearer'))
  @Delete('logout')
  @ApiOperation({
    description: 'Kijelntkezteti a felhasználót.',
  })
  async(@Headers('authorization') authHeader: string) {
    const token = authHeader.split(' ')[1];
    this.authService.logout(token);
  }
}
