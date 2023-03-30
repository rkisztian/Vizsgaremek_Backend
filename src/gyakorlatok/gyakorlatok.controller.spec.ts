import { Test, TestingModule } from '@nestjs/testing';
import { GyakorlatokController } from './gyakorlatok.controller';
import { GyakorlatokService } from './gyakorlatok.service';

describe('GyakorlatokController', () => {
  let controller: GyakorlatokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GyakorlatokController],
      providers: [GyakorlatokService],
    }).compile();

    controller = module.get<GyakorlatokController>(GyakorlatokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
