import { Test, TestingModule } from '@nestjs/testing';
import { IzomcsoportokService } from './izomcsoportok.service';

describe('IzomcsoportokService', () => {
  let service: IzomcsoportokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IzomcsoportokService],
    }).compile();

    service = module.get<IzomcsoportokService>(IzomcsoportokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
