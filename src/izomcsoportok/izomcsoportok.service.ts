import { Injectable } from '@nestjs/common';
import { UpdateIzomcsoportokDto } from './dto/update-izomcsoportok.dto';
import CreateIzomcsoportokDto from './dto/create-izomcsoportok.dto';
import { DataSource } from 'typeorm';
import Izomcsoportok from 'src/Entity/izomcsoportok.entity';
import Gyakorlat from 'src/Entity/gyakorlat.entity';

@Injectable()
export class IzomcsoportokService {
  constructor(private dataSource: DataSource) {}

  async create(createIzomcsoportokDto: CreateIzomcsoportokDto) {
    const izomcsoportRepo = this.dataSource.getRepository(Izomcsoportok);
    const ujizomcsoport = new Izomcsoportok();
    ujizomcsoport.izomcsoportokId = 0;
    ujizomcsoport.name = createIzomcsoportokDto.name;

    await izomcsoportRepo.save(ujizomcsoport);
  }

  async izomcsoportAddToGyakorlat(izomid: number, gyakorlatid: number) {
    const izomcsoportRepo = this.dataSource.getRepository(Izomcsoportok);
    const gyakorlatRepo = this.dataSource.getRepository(Gyakorlat);
    const izom = await izomcsoportRepo.findOne({
      where : { izomcsoportokId : izomid },
      relations : { gyakorlat: true },
    });
    const gyakorlat = await gyakorlatRepo.findOneBy({ gyakorlatId : gyakorlatid })
    izom.gyakorlat = gyakorlat;
    return izomcsoportRepo.save(izom)
  }

  async findAll() {
    return await this.dataSource.getRepository(Izomcsoportok).find();
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Izomcsoportok).findBy({ izomcsoportokId: id });
  }

  update(id: number, updateIzomcsoportokDto: UpdateIzomcsoportokDto) {
    return `This action updates a #${id} izomcsoportok`;
  }

  async remove(id: number) {
    const izomcsoportRepo = this.dataSource.getRepository(Izomcsoportok);
    return await izomcsoportRepo.delete(id);
  }
}
