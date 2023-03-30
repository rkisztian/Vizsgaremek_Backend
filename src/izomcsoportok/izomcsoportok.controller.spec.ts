import { Test, TestingModule } from '@nestjs/testing';
import { IzomcsoportokController } from './izomcsoportok.controller';
import { IzomcsoportokService } from './izomcsoportok.service';

describe('IzomcsoportokController', () => {
  let controller: IzomcsoportokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IzomcsoportokController],
      providers: [IzomcsoportokService],
    }).compile();

    controller = module.get<IzomcsoportokController>(IzomcsoportokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
