import { Test, TestingModule } from '@nestjs/testing';
import { CursanteController } from './cursante.controller';

describe('CursanteController', () => {
  let controller: CursanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursanteController],
    }).compile();

    controller = module.get<CursanteController>(CursanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
