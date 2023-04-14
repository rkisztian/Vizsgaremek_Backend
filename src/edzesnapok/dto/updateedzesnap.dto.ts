import { PartialType } from '@nestjs/swagger';
import CreateEdzesNapDto from './createedzesnap.dto';

export class UpdateEdzesNapDto extends PartialType(CreateEdzesNapDto) {}
