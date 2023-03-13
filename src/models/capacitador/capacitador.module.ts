import { Module } from '@nestjs/common';
import { CapacitadorController } from './capacitador.controller';
import { CapacitadorService } from './capacitador.service';

@Module({
  controllers: [CapacitadorController],
  providers: [CapacitadorService]
})
export class CapacitadorModule {}
