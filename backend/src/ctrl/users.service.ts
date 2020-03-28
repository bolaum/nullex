import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { ApiKey } from './apikey.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(ApiKey)
    private readonly apiKeysRepository: Repository<ApiKey>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOneByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }

  async findOneByApiKey(key: string): Promise<User> {
    const apiKey = await this.apiKeysRepository.findOne({ where: [{ key }] });
    return apiKey && apiKey.user;
  }

  async create(email: string) {
    const user = new User();

    user.email = email;

    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
