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

  async findall() {
    return await this.dataSource.getRepository(Edzesterv).find();
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Edzesterv).findBy({ id: id });
  }

  async update(id: number, updateEdzestervDto: UpdateEdzestervDto) {
    const edzestervRepo = this.dataSource.getRepository(Edzesterv);
    const updateedzesterv = new Edzesterv();
    updateedzesterv.edzestervId = id;
    updateedzesterv.name = updateEdzestervDto.name;
    edzestervRepo.save(updateedzesterv);
  }

  async remove(id: number) {
    const edzestervRepo = this.dataSource.getRepository(Edzesterv);
    return await edzestervRepo.delete(id);
  }
}
