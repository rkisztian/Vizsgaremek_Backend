import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EdzesNapok from './edzesnapok.entity';
import Izomcsoportok from './izomcsoportok.entity';

@Entity()
export default class Gyakorlat {
  @PrimaryGeneratedColumn()
  gyakorlatId: number;

  @Column()
  name: string;

  @Column()
  media: string;

  @Column("varchar", { length: 5000 })
  description: string;

  @ManyToMany(() => EdzesNapok, (edzesnapok) => edzesnapok.edzesnapokId)
  @JoinTable()
  edzesnapok: EdzesNapok;

  @OneToMany(() => Izomcsoportok, (izomcsoportok) => izomcsoportok.gyakorlat)
  izomcsoport: Izomcsoportok;
}
