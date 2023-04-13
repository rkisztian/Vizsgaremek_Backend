import { Injectable } from '@nestjs/common';
import { UpdateGyakorlatokDto } from './dto/update-gyakorlatok.dto';
import CreateGyakorlatokDto from './dto/create-gyakorlatok.dto';

@Injectable()
export class GyakorlatokService {
  create(createGyakorlatokDto: CreateGyakorlatokDto) {
    return 'This action adds a new gyakorlatok';
  }

  findAll() {
    return `This action returns all gyakorlatok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gyakorlatok`;
  }

  update(id: number, updateGyakorlatokDto: UpdateGyakorlatokDto) {
    return `This action updates a #${id} gyakorlatok`;
  }

  remove(id: number) {
    return `This action removes a #${id} gyakorlatok`;
  }
}
