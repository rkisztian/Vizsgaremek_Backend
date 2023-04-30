import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GyakorlatokService } from './gyakorlatok.service';
import { UpdateGyakorlatokDto } from './dto/update-gyakorlatok.dto';
import CreateGyakorlatokDto from './dto/create-gyakorlatok.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('gyakorlatok')
export class GyakorlatokController {
  constructor(private readonly gyakorlatokService: GyakorlatokService) {}

  @Post('create')
  @ApiOperation({ description: 'Létrehoz egy gyakorlatot.' })
  create(@Body() createGyakorlatokDto: CreateGyakorlatokDto) {
    return this.gyakorlatokService.create(createGyakorlatokDto);
  }

  @Post(':gyakorlatid/giveto/napid')
  @ApiOperation({ description: 'Hozzáadja a gyakorlat id-t a nap id-hoz' })
  @ApiParam({ name: 'gyakorlatid', description: 'Gyakorlat azonosítója.' })
  @ApiParam({ name: 'napid', description: 'Napnak az azonosítója.' })
  gyakorlatAddtoEdzesNap(
    @Param('gyakorlatid') gyakorlatid : number,
    @Param('napid') napid : number,
  ){
    return this.gyakorlatokService.gyakorlatAddtoEdzesNap(gyakorlatid, napid);
  }

  @Get('list')
  @ApiOperation({ description: 'Visszaadja az összes gyakorlatot' })
  findAll() {
    return this.gyakorlatokService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({ description: 'Visszaadja a megadott gyakorlat adatait.' })
  @ApiParam({ name: 'id', description: 'Gyakorlat azonosítója.' })
  findOne(@Param('id') id: string) {
    return this.gyakorlatokService.findOne(+id);
  }

  @Get('gyakorlatid/bynapid/:napid')
  @ApiOperation({description: 'Visszaadd több gyakorlatID-t napID alapján'})
  @ApiParam({ name: 'napid', description: 'Edzésnap azonosítója.'})
  gyakorlatidByNapidId(
    @Param('napid') napid: number,
  ){
    return this.gyakorlatokService.gyakorlatidByNapId(napid);
  }

  @Patch('update/:id')
  @ApiOperation({ description: 'Módosítja a megadott gyakorlat adatait.' })
  @ApiParam({ name: 'id', description: 'Gyakorlat azonosítója.' })
  update(
    @Param('id') id: string,
    @Body() updateGyakorlatokDto: UpdateGyakorlatokDto,
  ) {
    return this.gyakorlatokService.update(+id, updateGyakorlatokDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ description: 'Törölje a megadott gyakorlat adatait.' })
  @ApiParam({ name: 'id', description: 'Gyakorlat azonosítója.' })
  remove(@Param('id') id: string) {
    return this.gyakorlatokService.remove(+id);
  }
}
