import {
  BaseEntity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  Entity,
  JoinTable,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => User,
    user => user.groups,
    { onDelete: 'CASCADE' },
  )
  @JoinTable()
  users: User[];
}
