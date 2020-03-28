import { Controller, Post, Body, Logger, Inject, ConflictException, Get, Param, Request, Query, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

const log = new Logger('Controller:Ctrl:User');

@Controller('ctrl/user')
export class UsersController {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findOne(@Query() query) {
    let user: User;
    try {
      user = await this.usersService.findOneByEmail(query.email);

      log.debug(user.apiKeys);

      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    let user: User;
    try {
      user = await this.usersService.create(body.email);
      return user;
    } catch (error) {
      throw new ConflictException();
    }
  }

  @Post('apikey')
  async createApiKey(@Body() body: CreateUserDto) {
  }
}
