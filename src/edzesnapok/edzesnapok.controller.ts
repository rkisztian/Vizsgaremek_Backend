import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import CreateEdzesNapDto from './dto/createedzesnap.dto';
import { UpdateEdzesNapDto } from './dto/updateedzesnap.dto';
import { EdzesnapokService } from './edzesnapok.service';

@Controller('edzesnapok')
export class EdzesnapokController {
  constructor(private readonly edzesnapService: EdzesnapokService) {}

  @Post('edzesnapcreate')
  @ApiOperation({ description: 'Új edzésnapot hozz létre.' })
  create(@Body() createedzesNap: CreateEdzesNapDto) {
    return this.edzesnapService.create(createedzesNap);
  }

  @Post(':napid/giveto/edzestervid')
  @ApiOperation({
    description: 'Hozzáadja az edzésnap ID-ját az edzéstervhez.',
  })
  @ApiParam({
    name: 'napid',
    description: 'Napnak az azonosítója.',
  })
  @ApiParam({
    name: 'edzestervid',
    description: 'Az edzésterv azonosítója.',
  })
  napAddtoEdzesterv(
    @Param('napid') napid: number,
    @Param('edzestervid') edzestervid: number,
  ) {
    return this.edzesnapService.napAddtoEdzesterv(napid, edzestervid);
  }

  @Get('list')
  @ApiOperation({ description: 'Listázza az összes edzésnapot.' })
  findALl() {
    return this.edzesnapService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({ description: 'Visszaadja a megadott edzésnap adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésnap azonosítója.' })
  findOne(@Param('id') id: string) {
    return this.edzesnapService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ description: 'Módosítja a megadott edzésnap adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésnap azonosítója.' })
  update(
    @Param('id') id: string,
    @Body() updateedzesNapdto: UpdateEdzesNapDto,
  ) {
    return this.edzesnapService.update(+id, updateedzesNapdto);
  }

  @Delete('delete/:id')
  @ApiOperation({ description: 'Törli a megadott edzésnap adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésnap azonosítója.' })
  remove(@Param('id') id: string) {
    return this.edzesnapService.remove(+id);
  }
}
