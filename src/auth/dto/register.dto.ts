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
  @IsNotEmpty({message: "A név nem lehet üres!"})
  @IsString()
  username?: string;

  @IsNotEmpty({message: "Az email cím nem lehet üres!"})
  @IsEmail( {}, {message: "Ez az email cím nem megfelelő!"} )
  email?: string;

  
  @MaxLength(24)
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  password?: string;

  
  @MaxLength(24)
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  passwordAgain?: string;

  @IsOptional()
  @IsDateString()
  registrationDate: string | Date;
}
