import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Edzesterv from './edzesterv.entity';

@Entity()
export default class EdzesNapok {
  @PrimaryGeneratedColumn()
  edzesnapokId: number;

  @Column()
  name: string;

  @ManyToOne(() => Edzesterv, (edzesterv) => edzesterv.edzestervId)
  edzesterv: Edzesterv;
}
