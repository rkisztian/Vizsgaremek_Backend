import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { REGEX } from 'src/register.utils';

export default class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @MinLength(8)
  @MaxLength(24)
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  password?: string;

  @MinLength(8)
  @MaxLength(24)
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  passwordAgain?: string;

  @IsOptional()
  @IsDateString()
  registrationDate: string | Date;
}
