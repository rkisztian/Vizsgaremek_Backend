import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Query, Render } from '@nestjs/common';
import { DataSource, EntityNotFoundError } from 'typeorm';
import { AppService } from './app.service';
import RegisterDto from './register.dto';
import User from './user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/register')
  async registerUser(@Body() newUser: RegisterDto) {
    const userRepo = this.dataSource.getRepository(User);
    if (!newUser.registrationDate) {
      newUser.registrationDate = new Date();
    }
    if (newUser.password !== newUser.passwordAgain) {
      throw new BadRequestException('A két jelszónak egyeznie kell!')
    }
    await userRepo.save(newUser);
    return newUser;
  }

  @Post('/login')
  async searchUser(@Param('username') username: string){
      try{
        const userRepo = this.dataSource.getRepository(User);
        return await userRepo.findOneByOrFail({ username: username});
      } catch (e){
        if (e instanceof EntityNotFoundError) {
          throw new NotFoundException('Ezen a néven nincs regisztrálva fiók.')
        }else{
          throw e;
        }
    }
  }


}
