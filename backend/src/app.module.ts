import { Module, Logger, OnModuleInit, Inject } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CtrlModule } from './ctrl/ctrl.module';
import { TickerModule } from './ticker/ticker.module';
import { TradesModule } from './trades/trades.module';
import { BookModule } from './book/book.module';
import { WalletsModule } from './wallets/wallets.module';
import { OrdersModule } from './orders/orders.module';

const log = new Logger('Module:App');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST || 'postgres',
      port: parseInt(process.env.PG_PORT),
      username: 'postgres',
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE || 'postgres',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      // logging: true,
      logging: false,
    }),
    CtrlModule,
    TickerModule,
    TradesModule,
    BookModule,
    WalletsModule,
    OrdersModule,
  ],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    log.debug('module initialized');
  }
}
