import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export default class CreateEdzesNapDto {
  @ApiProperty({
    description: 'Az edzéstervnek az ID-ja. Egyedi generált ID',
    type: 'integer',
  })
  edzestervId: number;

  @IsString()
  @IsNotEmpty({})
  @ApiProperty({
    description: 'Az adott edzésnap megadása.',
    type: 'string',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Az adott edzésterv megadása.',
    type: 'string',
  })
  edzesterv: string;
}
