import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursanteModule } from './models/cursante/cursante.module';
import { CapacitacionModule } from './models/capacitacion/capacitacion.module';
import { CohorteModule } from './models/cohorte/cohorte.module';
import { CapacitadorModule } from './models/capacitador/capacitador.module';
import { DisciplinaModule } from './models/disciplina/disciplina.module';
import { MongooseModule } from "@nestjs/mongoose";
import { CargoModule } from './models/cargo/cargo.module';
import { InstitucionService } from './models/institucion/institucion.service';
import { DesignacionModule } from './models/designacion/designacion.module';
import { InstitucionModule } from './models/institucion/institucion.module';
import { InstitucionController } from './models/institucion/institucion.controller';
import { RolModule } from './models/rol/rol.module';
import { AreaController } from './models/area/area.controller';
import { AreaModule } from './models/area/area.module';
import { AreaService } from './models/area/area.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`) ,
    CursanteModule,
    CapacitacionModule, 
    CohorteModule, 
    CapacitadorModule, 
    DisciplinaModule,
    CargoModule,
    InstitucionModule,
    DesignacionModule,
    RolModule,
    AreaModule
  ],
  controllers: [AppController, InstitucionController, AreaController],
  providers: [AppService, InstitucionService, AreaService],
})
export class AppModule {}