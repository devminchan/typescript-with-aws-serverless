import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './Profile';

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

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
