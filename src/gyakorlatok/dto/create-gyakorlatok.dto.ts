import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateGyakorlatokDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  picture: string;

  video: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  edzesnapok: string;

  @IsString()
  izopmcsoport: string;
}
