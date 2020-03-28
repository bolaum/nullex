import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiKey } from './apikey.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @OneToMany(type => ApiKey, apiKey => apiKey.user)
  apiKeys: ApiKey[];
}
