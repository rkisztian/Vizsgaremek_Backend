import { Test, TestingModule } from '@nestjs/testing';
import { EdzestervController } from './edzesterv.controller';

describe('EdzestervController', () => {
  let controller: EdzestervController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdzestervController],
    }).compile();

    controller = module.get<EdzestervController>(EdzestervController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
