import { Module } from '@nestjs/common';
import { CursanteController } from './cursante.controller';
import { CursanteService } from './cursante.service';

@Module({
  controllers: [CursanteController],
  providers: [CursanteService]
})
export class CursanteModule {}
