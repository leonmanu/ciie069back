import { Test, TestingModule } from '@nestjs/testing';
import { CapacitadorController } from './capacitador.controller';

describe('CapacitadorController', () => {
  let controller: CapacitadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapacitadorController],
    }).compile();

    controller = module.get<CapacitadorController>(CapacitadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
