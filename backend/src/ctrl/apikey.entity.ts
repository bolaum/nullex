import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  alias: string;

  @Column({
    unique: true,
  })
  key: string;

  @OneToOne(type => User, user => user.apiKeys)
  @JoinColumn()
  user: User;
}
