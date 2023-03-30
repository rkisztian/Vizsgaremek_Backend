import { Test, TestingModule } from '@nestjs/testing';
import { GyakorlatokService } from './gyakorlatok.service';

describe('GyakorlatokService', () => {
  let service: GyakorlatokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GyakorlatokService],
    }).compile();

    service = module.get<GyakorlatokService>(GyakorlatokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
