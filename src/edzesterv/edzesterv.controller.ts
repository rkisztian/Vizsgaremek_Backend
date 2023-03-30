import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import CreateEdzestervDto from './dto/createedzesterv.dto';
import { EdzestervService } from './edzesterv.service';

@Controller('edzesterv')
export class EdzestervController {
  constructor(private edzestervService: EdzestervService) {}
}
