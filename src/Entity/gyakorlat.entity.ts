import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import EdzesNapok from './edzesnapok.entity';
import Izomcsoportok from './izomcsoportok.entity';

@Entity()
export default class Gyakorlat {
  @PrimaryGeneratedColumn()
  gyakorlatId: number;

  @Column()
  name: string;

  @Column()
  picture: string;

  @Column()
  video: string;

  @Column()
  description: string;

  @ManyToMany(() => EdzesNapok, (edzesnapok) => edzesnapok.edzesnapokId)
  @JoinTable()
  edzesnapok: EdzesNapok[];

  @ManyToOne(() => Izomcsoportok, (izomcsoportok) => izomcsoportok.gyakorlat)
  izomcsoport: Izomcsoportok[];
}
