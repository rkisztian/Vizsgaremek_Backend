import { BadRequestException, Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import User from 'src/Entity/user.entity';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return await this.dataSource.getRepository(User).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userRepo = this.dataSource.getRepository(User);
    if(!(await userRepo.findOneBy({ id: id}))) {
      throw new BadRequestException('Ilyen felhasználó nincsen')
    }
    const userUpdate = await userRepo.findOneBy({ id });
    if(updateUserDto.username == null) {
      throw new BadRequestException('Nincs adat kitöltve')
    }
    userUpdate.username = updateUserDto.username;
    userUpdate.password = updateUserDto.password;
    userUpdate.email = updateUserDto.email;
    
    userRepo.save(userUpdate);
  }

   async remove(id: number) {
    const userRepo = this.dataSource.getRepository(User);
    if(!(await userRepo.findOneBy({id : id}))) {
      throw new BadRequestException('Ilyen felhasználó nincsen');
    }
    userRepo.delete(id);
  }
}
