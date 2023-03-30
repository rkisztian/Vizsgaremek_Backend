import { Injectable } from '@nestjs/common';
import EdzesNapok from 'src/Entity/edzesnapok.entity';
import Edzesterv from 'src/Entity/edzesterv.entity';
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

  async napAddtoEdzesterv(napid: number, edzestervid: number) {
    const edzesnapRepo = this.dataSource.getRepository(EdzesNapok);
    const edzestervRepo = this.dataSource.getRepository(Edzesterv);
    const nap = await edzesnapRepo.findOne({
      where: { edzesnapokId: napid },
      relations: { edzesterv: true },
    });
    const terv = await edzestervRepo.findOneBy({ edzestervId: edzestervid });
    nap.edzesterv = terv;
    return edzesnapRepo.save(nap);
  }
}
