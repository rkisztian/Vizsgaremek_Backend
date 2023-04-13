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

  @Get('list')
  findALl() {
    return this.edzesnapService.findAll();
  }

  @Get('search/:id')
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

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.edzesnapService.remove(+id);
  }
}
