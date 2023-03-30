import { PartialType } from '@nestjs/swagger';
import { CreateGyakorlatokDto } from './create-gyakorlatok.dto';

export class UpdateGyakorlatokDto extends PartialType(CreateGyakorlatokDto) {}
