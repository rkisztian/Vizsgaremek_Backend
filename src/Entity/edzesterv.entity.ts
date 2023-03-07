import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import EdzesNapok from './edzesnapok.entity';
import User from './user.entity';

@Entity()
export default class Edzesterv {
  @PrimaryGeneratedColumn()
  edzestervId: number;

  @Column()
  name: string;

  @OneToMany(() => EdzesNapok, (edzesnapok) => edzesnapok.edzesterv)
  edzesnapok: EdzesNapok[];
}
