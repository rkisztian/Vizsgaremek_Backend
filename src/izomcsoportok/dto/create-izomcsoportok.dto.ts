import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateIzomcsoportokDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  gyakorlat: string;
}
