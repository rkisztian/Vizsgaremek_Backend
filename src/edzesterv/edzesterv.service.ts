import { Injectable } from '@nestjs/common';
import Edzesterv from 'src/Entity/edzesterv.entity';
import { DataSource } from 'typeorm';
import CreateEdzestervDto from './dto/createedzesterv.dto';
import UpdateEdzestervDto from './dto/updateedzesterv.dto';

@Injectable()
export class EdzestervService {
  constructor(private dataSource: DataSource) {}

  async create(createEdzestervDto: CreateEdzestervDto) {
    const edzestervRepo = this.dataSource.getRepository(Edzesterv);
    const ujedzesterv = new Edzesterv();
    ujedzesterv.edzestervId = 0;
    ujedzesterv.name = createEdzestervDto.name;

    await edzestervRepo.save(ujedzesterv);
  }

  async findall(edzesterv) {
    const edzestervRepo = this.dataSource.getRepository(Edzesterv);

    return await edzestervRepo.findBy(edzesterv);
  }

  async findone(id: number) {
    return '';
  }

  async update(id: number, updateEdzestervDto: UpdateEdzestervDto) {
    return '';
  }

  remove(id: number) {
    return '';
  }
}
