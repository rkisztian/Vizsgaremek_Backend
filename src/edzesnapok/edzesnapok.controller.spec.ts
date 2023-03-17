import { Test, TestingModule } from '@nestjs/testing';
import { EdzesnapokController } from './edzesnapok.controller';

describe('EdzesnapokController', () => {
  let controller: EdzesnapokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdzesnapokController],
    }).compile();

    controller = module.get<EdzesnapokController>(EdzesnapokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
