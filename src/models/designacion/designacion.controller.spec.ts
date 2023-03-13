import { Test, TestingModule } from '@nestjs/testing';
import { DesignacionController } from './designacion.controller';

describe('DesignacionController', () => {
  let controller: DesignacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignacionController],
    }).compile();

    controller = module.get<DesignacionController>(DesignacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
