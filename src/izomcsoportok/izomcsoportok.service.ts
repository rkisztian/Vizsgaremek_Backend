import { Injectable } from '@nestjs/common';
import { UpdateIzomcsoportokDto } from './dto/update-izomcsoportok.dto';
import CreateIzomcsoportokDto from './dto/create-izomcsoportok.dto';

@Injectable()
export class IzomcsoportokService {
  create(createIzomcsoportokDto: CreateIzomcsoportokDto) {
    return 'This action adds a new izomcsoportok';
  }

  findAll() {
    return `This action returns all izomcsoportok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} izomcsoportok`;
  }

  update(id: number, updateIzomcsoportokDto: UpdateIzomcsoportokDto) {
    return `This action updates a #${id} izomcsoportok`;
  }

  remove(id: number) {
    return `This action removes a #${id} izomcsoportok`;
  }
}
