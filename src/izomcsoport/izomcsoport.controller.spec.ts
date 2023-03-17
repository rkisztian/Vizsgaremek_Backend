import { Test, TestingModule } from '@nestjs/testing';
import { IzomcsoportController } from './izomcsoport.controller';

describe('IzomcsoportController', () => {
  let controller: IzomcsoportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IzomcsoportController],
    }).compile();

    controller = module.get<IzomcsoportController>(IzomcsoportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
