import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Edzesterv from './edzesterv.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  registrationDate: Date;

  @ManyToMany(() => Edzesterv, (edzesterv) => edzesterv.edzestervId)
  @JoinTable()
  edzesterv: Edzesterv;
}
