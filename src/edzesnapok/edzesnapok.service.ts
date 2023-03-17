import { Injectable } from '@nestjs/common';
import EdzesNapok from 'src/Entity/edzesnapok.entity';
import { DataSource } from 'typeorm';
import CreateEdzesNapDto from './dto/createedzesnap.dto';

@Injectable()
export class EdzesnapokService {
  constructor(private dataSource: DataSource) {}

  async create(createEdzesNapDto: CreateEdzesNapDto) {
    const edzestervnapRepo = this.dataSource.getRepository(EdzesNapok);
    const ujedzesNap = new EdzesNapok();
    ujedzesNap.edzesnapokId = 0;
    ujedzesNap.name = createEdzesNapDto.name;

    await edzestervnapRepo.save(ujedzesNap);
  }
}
