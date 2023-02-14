import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { ROXO } from './app.utils';

export default class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @MinLength(8, 24)
  @IsNotEmpty()
  @Matches(ROXO.PASSWORD_RULE, { message: ROXO.PASSWORD_MESSAGE })
  password?: string;

  @MinLength(8, 24)
  @IsNotEmpty()
  @Matches(ROXO.PASSWORD_RULE, { message: ROXO.PASSWORD_MESSAGE })
  passwordAgain?: string;

  @IsOptional()
  @IsDateString()
  registrationDate: string | Date;
}
