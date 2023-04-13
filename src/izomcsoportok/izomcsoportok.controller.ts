import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IzomcsoportokService } from './izomcsoportok.service';

import { UpdateIzomcsoportokDto } from './dto/update-izomcsoportok.dto';
import CreateIzomcsoportokDto from './dto/create-izomcsoportok.dto';

@Controller('izomcsoportok')
export class IzomcsoportokController {
  constructor(private readonly izomcsoportokService: IzomcsoportokService) {}

  @Post('create')
  create(@Body() createIzomcsoportokDto: CreateIzomcsoportokDto) {
    return this.izomcsoportokService.create(createIzomcsoportokDto);
  }

  @Get('list')
  findAll() {
    return this.izomcsoportokService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {
    return this.izomcsoportokService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateIzomcsoportokDto: UpdateIzomcsoportokDto,
  ) {
    return this.izomcsoportokService.update(+id, updateIzomcsoportokDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.izomcsoportokService.remove(+id);
  }
}
