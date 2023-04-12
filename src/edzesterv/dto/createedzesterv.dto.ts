//Validációt!!!

import { IsEmpty, IsString } from 'class-validator';

export default class CreateEdzestervDto {
  @IsEmpty({ message: 'Nem lehet üres a mező' })
  @IsString()
  name: string;

  @IsString()
  edzesnapok: string;
}
