//Validációt!!!

import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export default class CreateEdzestervDto {
  @IsNotEmpty({ message: 'Nem lehet üres a mező' })
  @IsString()
  name: string;

  @IsString()
  edzesnapok: string;
}
