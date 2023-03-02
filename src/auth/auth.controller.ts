import { Controller, Body, Post, UnauthorizedException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import User from 'src/user.entity';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import LoginDto from './login.dto';

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
}
