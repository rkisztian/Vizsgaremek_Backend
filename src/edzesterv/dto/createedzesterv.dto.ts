import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export default class CreateEdzestervDto {
  @IsNotEmpty({ message: 'Nem lehet üres a mező' })
  @IsString()
  @ApiProperty({
    description: 'Az edésterv megnevezése.',
    type: 'string',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Az edzésnap megnevezése.',
    type: 'string',
  })
  edzesnapok: string;
}
