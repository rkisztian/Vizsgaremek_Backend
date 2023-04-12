import { IsString } from 'class-validator';

export default class CreateEdzesNapDto {
  edzestervId: number;

  @IsString()
  name: string;

  @IsString()
  edzesterv: string;
}
