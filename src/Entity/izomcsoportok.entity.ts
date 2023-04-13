import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Gyakorlat from './gyakorlat.entity';

@Entity()
export default class Izomcsoportok {
  @PrimaryGeneratedColumn()
  izomcsoportokId: number;

  @Column()
  name: string;

  @ManyToOne(() => Gyakorlat, (gyakorlat) => gyakorlat.gyakorlatId)
  gyakorlat: Gyakorlat;
}
