import { Module } from '@nestjs/common';
import { OrdersControllerR, OrdersControllerW } from './orders.controller';

@Module({
  controllers: [OrdersControllerR, OrdersControllerW]
})
export class OrdersModule {}
