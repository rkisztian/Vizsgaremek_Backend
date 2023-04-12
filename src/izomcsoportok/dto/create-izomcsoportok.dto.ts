import { IsString } from 'class-validator';

export default class CreateIzomcsoportokDto {
  @IsString()
  name: string;

  @IsString()
  gyakorlat: string;
}
