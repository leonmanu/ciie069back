import { Test, TestingModule } from '@nestjs/testing';
import { CursanteService } from './cursante.service';

describe('CursanteService', () => {
  let service: CursanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursanteService],
    }).compile();

    service = module.get<CursanteService>(CursanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
