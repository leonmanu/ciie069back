import { Test, TestingModule } from '@nestjs/testing';
import { CapacitadorService } from './capacitador.service';

describe('CapacitadorService', () => {
  let service: CapacitadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapacitadorService],
    }).compile();

    service = module.get<CapacitadorService>(CapacitadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
