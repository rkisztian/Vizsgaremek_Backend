import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export default class CreateEdzesNapDto {
  edzestervId: number;

  @IsString()
  @IsNotEmpty({})
  name: string;

  @IsString()
  @IsNotEmpty()
  edzesterv: string;
}
