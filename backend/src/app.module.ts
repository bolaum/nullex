import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TickerModule } from './ticker/ticker.module';
import { TradesModule } from './trades/trades.module';
import { BookModule } from './book/book.module';
import { WalletsModule } from './wallets/wallets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TickerModule,
    TradesModule,
    BookModule,
    WalletsModule,
    OrdersModule,
  ],
})
export class AppModule {}
