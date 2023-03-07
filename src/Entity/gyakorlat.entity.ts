import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import EdzesNapok from './edzesnapok.entity';

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
}
