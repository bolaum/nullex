import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users.module';
import { CtrlController } from './ctrl.controller';

@Module({
  imports: [
    UsersModule,
  ],
  controllers: [CtrlController],
})
export class CtrlModule {}
