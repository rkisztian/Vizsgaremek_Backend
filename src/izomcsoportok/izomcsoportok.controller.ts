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
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('izomcsoportok')
export class IzomcsoportokController {
  constructor(private readonly izomcsoportokService: IzomcsoportokService) {}

  @Post('create')
  @ApiOperation({ description: 'Létrehoz egy izomcsoportot.' })
  create(@Body() createIzomcsoportokDto: CreateIzomcsoportokDto) {
    return this.izomcsoportokService.create(createIzomcsoportokDto);
  }

  @Post(':izomid/giveto/gyakorlatid')
  @ApiOperation({
    description: 'Hozzáadja az izomcsoport ID-ját a gyakorlathoz.',
  })
  @ApiParam({
    name: 'izomid',
    description: 'Izomcsoportnak az azonosítója.',
  })
  @ApiParam({
    name: 'gyakorlatid',
    description: 'A gyakorlat azonosítója.',
  })
  izomcsoportAddToGyakorlat(
    @Param('izomid') izomid : number,
    @Param('gyakorlatid') gyakorlatid : number,
  ){
    return this.izomcsoportokService.izomcsoportAddToGyakorlat(izomid, gyakorlatid);
  }

  @Get('list')
  @ApiOperation({ description: 'Listázza az összes izomcsoportot.' })
  findAll() {
    return this.izomcsoportokService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({ description: 'Visszaadja a megadott izomcsoport adatait.' })
  @ApiParam({ name: 'id', description: 'Izomcsoport azonosítója.' })
  findOne(@Param('id') id: string) {
    return this.izomcsoportokService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ description: 'Módosítja a megadott izomcsoport adatait.' })
  @ApiParam({ name: 'id', description: 'Izomcsoport azonosítója.' })
  update(
    @Param('id') id: string,
    @Body() updateIzomcsoportokDto: UpdateIzomcsoportokDto,
  ) {
    return this.izomcsoportokService.update(+id, updateIzomcsoportokDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ description: 'Törli a megadott izomcsoport adatait.' })
  @ApiParam({ name: 'id', description: 'Izomcsoport azonosítója.' })
  remove(@Param('id') id: string) {
    return this.izomcsoportokService.remove(+id);
  }
}
