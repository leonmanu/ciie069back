"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacitacionModule = void 0;
const common_1 = require("@nestjs/common");
const capacitacion_controller_1 = require("./capacitacion.controller");
const capacitacion_service_1 = require("./capacitacion.service");
const mongoose_1 = require("@nestjs/mongoose");
const capacitacion_schema_1 = require("./schema/capacitacion.schema");
let CapacitacionModule = class CapacitacionModule {
};
CapacitacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Capacitacion', schema: capacitacion_schema_1.CapacitacionSchema }
            ])
        ],
        controllers: [capacitacion_controller_1.CapacitacionController],
        providers: [capacitacion_service_1.CapacitacionService]
    })
], CapacitacionModule);
exports.CapacitacionModule = CapacitacionModule;
//# sourceMappingURL=capacitacion.module.js.map