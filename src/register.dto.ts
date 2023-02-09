import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export default class RegisterDto {
  @IsString()
  username?: string;

  @IsEmail()
  email?: string;

  @MinLength(8)
  password?: string;

  @MinLength(8)
  passwordAgain?: string;

  @IsOptional()
  @IsDateString()
  registrationDate: string | Date;
}
