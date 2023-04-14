import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import CreateEdzesNapDto from './dto/createedzesnap.dto';
import { UpdateEdzesNapDto } from './dto/updateedzesnap.dto';
import { EdzesnapokService } from './edzesnapok.service';

@Controller('edzesnapok')
export class EdzesnapokController {
  constructor(private readonly edzesnapService: EdzesnapokService) {}

  @Post('edzesnapcreate')
  create(@Body() createedzesNap: CreateEdzesNapDto) {
    return this.edzesnapService.create(createedzesNap);
  }

  @Post(':napid/giveto/edzestervid')
  napAddtoEdzesterv(
    @Param('napid') napid: number,
    @Param('edzestervid') edzestervid : number,
  ) {
    return this.edzesnapService.napAddtoEdzesterv(napid, edzestervid);
  }

  @Get('list')
  findALl() {
    return this.edzesnapService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {
    return this.edzesnapService.findOne(+id);
  }
  
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateedzesNapdto: UpdateEdzesNapDto,
  ) {
    return this.edzesnapService.update(+id, updateedzesNapdto);
  }
  

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.edzesnapService.remove(+id);
  }
}
