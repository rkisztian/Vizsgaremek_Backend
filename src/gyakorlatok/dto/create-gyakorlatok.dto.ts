import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateGyakorlatokDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;


  media: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  edzesnapok: string;

  @IsString()
  izopmcsoport: string;
}
