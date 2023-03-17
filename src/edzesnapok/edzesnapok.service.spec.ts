import { Test, TestingModule } from '@nestjs/testing';
import { EdzesnapokService } from './edzesnapok.service';

describe('EdzesnapokService', () => {
  let service: EdzesnapokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdzesnapokService],
    }).compile();

    service = module.get<EdzesnapokService>(EdzesnapokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
