import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import CreateEdzestervDto from './dto/createedzesterv.dto';
import UpdateEdzestervDto from './dto/updateedzesterv.dto';
import { EdzestervService } from './edzesterv.service';

@Controller('edzesterv')
export class EdzestervController {
  constructor(private edzestervService: EdzestervService) {}

  @Post('createEdzester')
  create(@Body() createEdzestervDto: CreateEdzestervDto) {
    return this.edzestervService.create(createEdzestervDto);
  }

  @Get('list')
  findAll() {
    return this.edzestervService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {
    return this.edzestervService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateEdzestervDto: UpdateEdzestervDto,
  ) {
    return this.edzestervService.update(+id, updateEdzestervDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.edzestervService.remove(+id);
  }
}
