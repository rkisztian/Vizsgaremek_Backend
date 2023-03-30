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
import { CreateIzomcsoportokDto } from './dto/create-izomcsoportok.dto';
import { UpdateIzomcsoportokDto } from './dto/update-izomcsoportok.dto';

@Controller('izomcsoportok')
export class IzomcsoportokController {
  constructor(private readonly izomcsoportokService: IzomcsoportokService) {}

  @Post()
  create(@Body() createIzomcsoportokDto: CreateIzomcsoportokDto) {
    return this.izomcsoportokService.create(createIzomcsoportokDto);
  }

  @Get()
  findAll() {
    return this.izomcsoportokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.izomcsoportokService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIzomcsoportokDto: UpdateIzomcsoportokDto,
  ) {
    return this.izomcsoportokService.update(+id, updateIzomcsoportokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.izomcsoportokService.remove(+id);
  }
}
