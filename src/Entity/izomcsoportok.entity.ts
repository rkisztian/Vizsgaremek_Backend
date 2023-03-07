import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Gyakorlat from './gyakorlat.entity';

@Entity()
export default class Izomcsoportok {
  @PrimaryGeneratedColumn()
  izomcsoportId: number;

  @Column()
  name: string;

  @OneToMany(() => Gyakorlat, (gyakorlat) => gyakorlat.gyakorlatId)
  gyakorlat: Gyakorlat[];
}
