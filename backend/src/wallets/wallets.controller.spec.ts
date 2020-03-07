import { Test, TestingModule } from '@nestjs/testing';
import { WalletsControllerR } from './wallets.controller';

describe('Wallets Controller', () => {
  let controller: WalletsControllerR;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletsControllerR],
    }).compile();

    controller = module.get<WalletsControllerR>(WalletsControllerR);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
