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

  @UseGuards(AuthGuard('bearer'))
  @Post()
  createEdzesterv(
    @Body() createEdzestervDto: CreateEdzestervDto,
    @Request() req,
  ) {
    return this.edzestervService.create(createEdzestervDto, req.edzesterv);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('getAllEdzesterv')
  findallEdzesterv(@Request() req) {
    return this.edzestervService.findall(req.edzesterv);
  }
}
