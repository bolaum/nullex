import { Test, TestingModule } from '@nestjs/testing';
import { OrdersControllerR, OrdersControllerW } from './orders.controller';

describe('Orders Controller', () => {
  let controllerR: OrdersControllerR;
  let controllerW: OrdersControllerW;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersControllerR, OrdersControllerW],
    }).compile();

    controllerR = module.get<OrdersControllerR>(OrdersControllerR);
    controllerW = module.get<OrdersControllerW>(OrdersControllerW);
  });

  it('should be defined', () => {
    expect(controllerR).toBeDefined();
    expect(controllerW).toBeDefined();
  });
});
