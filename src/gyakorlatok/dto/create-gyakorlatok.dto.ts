import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateGyakorlatokDto {
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A gyakorlat megnevezése.',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'A média megnevezése.',
    type: 'string',
  })
  media: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A gyakorlat leírása.',
    type: 'string',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Az edzésnap megnevezése.',
    type: 'string',
  })
  edzesnapok: string;

  @IsString()
  @ApiProperty({
    description: 'Az izomcsoport megnevezése.',
    type: 'string',
  })
  izopmcsoport: string;
}
