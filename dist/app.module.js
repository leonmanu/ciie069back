"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cursante_module_1 = require("./models/cursante/cursante.module");
const capacitacion_module_1 = require("./models/capacitacion/capacitacion.module");
const cohorte_module_1 = require("./models/cohorte/cohorte.module");
const capacitador_module_1 = require("./models/capacitador/capacitador.module");
const disciplina_module_1 = require("./models/disciplina/disciplina.module");
const mongoose_1 = require("@nestjs/mongoose");
const cargo_module_1 = require("./models/cargo/cargo.module");
const institucion_service_1 = require("./models/institucion/institucion.service");
const designacion_module_1 = require("./models/designacion/designacion.module");
const institucion_module_1 = require("./models/institucion/institucion.module");
const institucion_controller_1 = require("./models/institucion/institucion.controller");
const rol_module_1 = require("./models/rol/rol.module");
const area_controller_1 = require("./models/area/area.controller");
const area_module_1 = require("./models/area/area.module");
const area_service_1 = require("./models/area/area.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:Gusanito1@ciie.vvkhe1n.mongodb.net/?retryWrites=true&w=majority'),
            cursante_module_1.CursanteModule,
            capacitacion_module_1.CapacitacionModule,
            cohorte_module_1.CohorteModule,
            capacitador_module_1.CapacitadorModule,
            disciplina_module_1.DisciplinaModule, cargo_module_1.CargoModule, institucion_module_1.InstitucionModule, designacion_module_1.DesignacionModule, rol_module_1.RolModule, area_module_1.AreaModule
        ],
        controllers: [app_controller_1.AppController, institucion_controller_1.InstitucionController, area_controller_1.AreaController],
        providers: [app_service_1.AppService, institucion_service_1.InstitucionService, area_service_1.AreaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map