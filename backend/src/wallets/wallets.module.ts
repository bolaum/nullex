import { Module } from '@nestjs/common';
import { WalletsControllerR } from './wallets.controller';

@Module({
  controllers: [WalletsControllerR],
})
export class WalletsModule {}
