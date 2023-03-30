//Validációt!!!

import { IsEmpty } from 'class-validator';

export default class CreateEdzestervDto {
  @IsEmpty({ message: 'Nem lehet üres a mező' })
  name: string;
}
