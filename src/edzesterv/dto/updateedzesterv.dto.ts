import { PartialType } from '@nestjs/mapped-types';
import CreateEdzestervDto from './createedzesterv.dto';

export default class UpdateEdzestervDto extends PartialType(
  CreateEdzestervDto,
) {}
