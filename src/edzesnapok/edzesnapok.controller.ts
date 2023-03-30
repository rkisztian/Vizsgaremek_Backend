import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import CreateEdzesNapDto from './dto/createedzesnap.dto';
import { EdzesnapokService } from './edzesnapok.service';

@Controller('edzesnapok')
export class EdzesnapokController {
  constructor(private readonly edzesnapService: EdzesnapokService) {}

  @Post('edzesnapcreate')
  create(@Body() createedzesNap: CreateEdzesNapDto) {
    return this.edzesnapService.create(createedzesNap);
  }

  @Get('allnap')
  findALl() {
    return this.edzesnapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.edzesnapService.findOne(+id);
  }
  /*
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateedzesNapdto: UpdateEdzesNapDto,
  ) {
    return this.edzesnapService.update(+id, updateedzesNapdto);
  }
  */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edzesnapService.remove(+id);
  }
}
