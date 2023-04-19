import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import CreateEdzestervDto from './dto/createedzesterv.dto';
import UpdateEdzestervDto from './dto/updateedzesterv.dto';
import { EdzestervService } from './edzesterv.service';

@Controller('edzesterv')
export class EdzestervController {
  constructor(private edzestervService: EdzestervService) {}

  @Post('createEdzester')
  @ApiOperation({ description: 'Létrehoz egy edzéstervet.' })
  create(@Body() createEdzestervDto: CreateEdzestervDto) {
    return this.edzestervService.create(createEdzestervDto);
  }

  @Get('list')
  @ApiOperation({ description: 'Visszaadja az összes edzéstervet.' })
  findAll() {
    return this.edzestervService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({ description: 'Visszaadja a megadott edzésterv adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésterv azonosítója.' })
  findOne(@Param('id') id: string) {
    return this.edzestervService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ description: 'Módosítja a megadott edzésterv adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésterv azonosítója.' })
  update(
    @Param('id') id: string,
    @Body() updateEdzestervDto: UpdateEdzestervDto,
  ) {
    return this.edzestervService.update(+id, updateEdzestervDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ description: 'Törli a megadott edzésterv adatait.' })
  @ApiParam({ name: 'id', description: 'Edzésterv azonosítója.' })
  remove(@Param('id') id: string) {
    return this.edzestervService.remove(+id);
  }
}
