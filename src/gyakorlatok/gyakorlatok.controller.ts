import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GyakorlatokService } from './gyakorlatok.service';
import { CreateGyakorlatokDto } from './dto/create-gyakorlatok.dto';
import { UpdateGyakorlatokDto } from './dto/update-gyakorlatok.dto';

@Controller('gyakorlatok')
export class GyakorlatokController {
  constructor(private readonly gyakorlatokService: GyakorlatokService) {}

  @Post()
  create(@Body() createGyakorlatokDto: CreateGyakorlatokDto) {
    return this.gyakorlatokService.create(createGyakorlatokDto);
  }

  @Get()
  findAll() {
    return this.gyakorlatokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyakorlatokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyakorlatokDto: UpdateGyakorlatokDto) {
    return this.gyakorlatokService.update(+id, updateGyakorlatokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gyakorlatokService.remove(+id);
  }
}
