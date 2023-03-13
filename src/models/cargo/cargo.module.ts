import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CargoController } from './cargo.controller';
import { CargoService } from './cargo.service';
import { CargoSchema } from './schema/cargo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cargo', schema: CargoSchema }
    ])
  ],
  controllers: [CargoController],
  providers: [CargoService]
})
export class CargoModule {}
