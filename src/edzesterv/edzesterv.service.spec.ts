import { Test, TestingModule } from '@nestjs/testing';
import { EdzestervService } from './edzesterv.service';

describe('EdzestervService', () => {
  let service: EdzestervService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdzestervService],
    }).compile();

    service = module.get<EdzestervService>(EdzestervService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
