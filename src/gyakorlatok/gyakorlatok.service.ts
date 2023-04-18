import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateGyakorlatokDto } from './dto/update-gyakorlatok.dto';
import CreateGyakorlatokDto from './dto/create-gyakorlatok.dto';
import { DataSource } from 'typeorm';
import Gyakorlat from 'src/Entity/gyakorlat.entity';
import EdzesNapok from 'src/Entity/edzesnapok.entity';

@Injectable()
export class GyakorlatokService {
  constructor(private dataSource: DataSource) {}

  async create(createGyakorlatokDto: CreateGyakorlatokDto) {
    const gyakorlatRepo = this.dataSource.getRepository(Gyakorlat);
    const ujGyakorlat = new Gyakorlat();
    ujGyakorlat.gyakorlatId = 0;
    ujGyakorlat.name = createGyakorlatokDto.name;
    ujGyakorlat.media = createGyakorlatokDto.media;
    ujGyakorlat.description = createGyakorlatokDto.description;

    await gyakorlatRepo.save(ujGyakorlat);
  }

  async gyakorlatAddtoEdzesNap(gyakorlatid: number, napid: number) {
    const gyakorlatRepo = this.dataSource.getRepository(Gyakorlat);
    const edzesnapRepo = this.dataSource.getRepository(EdzesNapok);
    const gyakorlat = await gyakorlatRepo.findOne({
      where : { gyakorlatId: gyakorlatid },
      relations : { edzesnapok: true },
    });
    const nap = await edzesnapRepo.findOneBy({ edzesnapokId: napid })
    gyakorlat.edzesnapok = nap;
    return gyakorlatRepo.save(gyakorlat)
  }

  async findAll() {
    return await this.dataSource.getRepository(Gyakorlat).find();
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Gyakorlat).findBy({ gyakorlatId : id  });
  }

  async update(id: number, updateGyakorlatokDto: UpdateGyakorlatokDto) {
    const gyakorlatRepo = this.dataSource.getRepository(Gyakorlat);
    const updategyakorlat = new Gyakorlat();
    updategyakorlat.gyakorlatId = id;
    updategyakorlat.name = updateGyakorlatokDto.name;
    gyakorlatRepo.save(updategyakorlat);
  }

  async remove(id: number) {
    const gyakorlatRepo = this.dataSource.getRepository(Gyakorlat);
    if(!(await gyakorlatRepo.findOneBy({ gyakorlatId: id }))) {
      throw new BadRequestException('Ilyen gyakorlat nincsen')
    }
    gyakorlatRepo.delete(id);
  }
}
