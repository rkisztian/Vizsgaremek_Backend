import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { REGEX } from 'src/register.utils';
import { ApiProperty } from '@nestjs/swagger';

export default class RegisterDto {
  @IsNotEmpty({ message: 'A név nem lehet üres!' })
  @IsString()
  @ApiProperty({
    description:
      'A felhasználónak a felhasználó neve. Az adatbázisban egyedinek kell lennie, és nem lehet üres.',
    type: 'string',
  })
  username?: string;

  @IsNotEmpty({ message: 'Az email cím nem lehet üres!' })
  @IsEmail({}, { message: 'Ez az email cím nem megfelelő!' })
  @ApiProperty({
    description:
      'A felhasználónak az email címe. Az adatbázisban egyedinek kell lennie, és nem lehet üres.',
    type: 'string',
  })
  email?: string;

  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  @ApiProperty({
    description:
      'A felhasználónak a jelszava. Meg kell felelnie a jelszó előírásnak ami legalább 8 de legfeljebb 24 hosszú, nagybetűt, számot és speciális karaktert alkalmazon.',
    type: 'string',
  })
  password?: string;

  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, { message: REGEX.PASSWORD_MESSAGE })
  @ApiProperty({
    description:
      'A felhasználónak a jelszava mégegyszer. Meg kell egyeznie a megadott jelszóval.',
    type: 'string',
  })
  passwordAgain?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({
    description: 'A felhasználónak a regisztrációs dátuma.',
    type: 'string',
  })
  registrationDate: string | Date;
}
