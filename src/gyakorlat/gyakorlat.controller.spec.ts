import { Test, TestingModule } from '@nestjs/testing';
import { GyakorlatController } from './gyakorlat.controller';

describe('GyakorlatController', () => {
  let controller: GyakorlatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GyakorlatController],
    }).compile();

    controller = module.get<GyakorlatController>(GyakorlatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
