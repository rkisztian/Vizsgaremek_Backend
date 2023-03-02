import { AuthService } from './auth.service';
import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export default class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string) {
    const user = this.authService.findUserByToken(token);
    if (user === null) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
