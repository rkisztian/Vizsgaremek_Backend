import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Get('list')
  @ApiOperation({ description: 'Visszaadja az összes felhasználót.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({ description: 'Visszaadja a megadott felhasználó adatait.' })
  @ApiParam({ name: 'id', description: 'Felhasználó azonosítója.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('profile')
  findProfile(@Request() req){
    return this.userService.getProfile(req)
  }

  @Patch('update/:id')
  @ApiOperation({ description: 'Módosítja a megadott felhasználó adatait.' })
  @ApiParam({ name: 'id', description: 'Felhasználó azonosítója.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ description: 'Törli a megadott felhasználó adatait.' })
  @ApiParam({ name: 'id', description: 'Felhasználó azonosítója.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
