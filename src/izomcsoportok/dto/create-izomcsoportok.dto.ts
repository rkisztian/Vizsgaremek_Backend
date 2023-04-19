import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateIzomcsoportokDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Az izomcsoport megnevezése.',
    type: 'string',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'A gyakolrat megnevezése.',
    type: 'string',
  })
  gyakorlat: string;
}
