import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GyakorlatokService } from './gyakorlatok.service';
import { UpdateGyakorlatokDto } from './dto/update-gyakorlatok.dto';
import CreateGyakorlatokDto from './dto/create-gyakorlatok.dto';

@Controller('gyakorlatok')
export class GyakorlatokController {
  constructor(private readonly gyakorlatokService: GyakorlatokService) {}

  @Post('create')
  create(@Body() createGyakorlatokDto: CreateGyakorlatokDto) {
    return this.gyakorlatokService.create(createGyakorlatokDto);
  }

  @Post(':gyakorlatid/giveto/napid')
  gyakorlatAddtoEdzesNap(
    @Param('gyakorlatid') gyakorlatid : number,
    @Param('napid') napid : number,
  ){
    return this.gyakorlatokService.gyakorlatAddtoEdzesNap(gyakorlatid, napid);
  }

  @Get('list')
  findAll() {
    return this.gyakorlatokService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {
    return this.gyakorlatokService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateGyakorlatokDto: UpdateGyakorlatokDto) {
    return this.gyakorlatokService.update(+id, updateGyakorlatokDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.gyakorlatokService.remove(+id);
  }
}
