import { IsString } from 'class-validator';

export default class CreateGyakorlatokDto {
  @IsString()
  name: string;

  @IsString()
  picture: string;

  @IsString()
  video: string;

  @IsString()
  description: string;

  @IsString()
  edzesnapok: string;

  @IsString()
  izopmcsoport: string;
}
