import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export default class LoginDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'A felhasználónak a bejelntkezési felhasználó neve.',
    type: 'string',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description:
      'A felhasználónak a bejelntkezési jelszava ami a felhasználónévhez van kötve egyedileg.',
    type: 'string',
  })
  password: string;
}
