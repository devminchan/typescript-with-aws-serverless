import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Profile } from './Profile';
import { Post } from './Post';
import { Group } from './Group';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: Date, nullable: true, default: null })
  deletedAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(
    () => Profile,
    profile => profile.user,
  )
  profile: Profile;

  @OneToMany(
    () => Post,
    post => post.user,
  )
  posts: Post[];

  @ManyToMany(
    () => Group,
    group => group.users,
  )
  groups: Group[];
}
