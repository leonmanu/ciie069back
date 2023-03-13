import { Module } from '@nestjs/common';
import { DesignacionController } from './designacion.controller';
import { DesignacionService } from './designacion.service';

@Module({
  controllers: [DesignacionController],
  providers: [DesignacionService]
})
export class DesignacionModule {}
