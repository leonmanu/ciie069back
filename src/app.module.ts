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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:Gusanito1@ciie.vvkhe1n.mongodb.net/?retryWrites=true&w=majority?directConnection=true') ,
    CursanteModule,
    CapacitacionModule, 
    CohorteModule, 
    CapacitadorModule, 
    DisciplinaModule, CargoModule, InstitucionModule, DesignacionModule, RolModule
  ],
  controllers: [AppController, InstitucionController],
  providers: [AppService, InstitucionService],
})
export class AppModule {}