import { Module } from '@nestjs/common';
import { CapacitacionController } from './capacitacion.controller';
import { CapacitacionService } from './capacitacion.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CapacitacionSchema } from './schema/capacitacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Capacitacion', schema: CapacitacionSchema }
    ])
  ],
  controllers: [CapacitacionController],
  providers: [CapacitacionService]
})
export class CapacitacionModule {}
