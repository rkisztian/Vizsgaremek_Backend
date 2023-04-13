import { PartialType } from '@nestjs/swagger';
import CreateIzomcsoportokDto from './create-izomcsoportok.dto';


export class UpdateIzomcsoportokDto extends PartialType(CreateIzomcsoportokDto) {}
