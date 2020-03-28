import { Controller, Post, Inject, Logger } from "@nestjs/common";
import { Connection } from 'typeorm';

import { ApiKey } from "./apikey.entity";
import { User } from "./user.entity";

const log = new Logger('Controller:Ctrl');

@Controller('ctrl')
export class CtrlController {
  constructor(@Inject('Connection') public connection: Connection) {};

  @Post('db/clear')
  async clearDB() {
    log.warn('Clearing DB...');

    await this.connection
      .createQueryBuilder()
      .delete()
      .from(ApiKey)
      .execute();

    await this.connection
      .createQueryBuilder()
      .delete()
      .from(User)
      .execute();
  }
}
