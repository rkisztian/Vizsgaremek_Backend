import { IsEmail, IsString } from 'class-validator';

export default class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  
  @IsString()
  password: string;
}
