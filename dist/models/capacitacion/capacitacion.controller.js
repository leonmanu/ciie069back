"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacitacionController = void 0;
const common_1 = require("@nestjs/common");
const capacitacion_service_1 = require("./capacitacion.service");
const capacitacion_dto_1 = require("./dto/capacitacion.dto");
let CapacitacionController = class CapacitacionController {
    constructor(capacitacionService) {
        this.capacitacionService = capacitacionService;
    }
    async post(res, capacitacionDTO) {
        console.log(capacitacionDTO);
        const capacitacion = await this.capacitacionService.post(capacitacionDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'recived',
            capacitacion: capacitacion
        });
    }
};
__decorate([
    (0, common_1.Post)('/crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, capacitacion_dto_1.CapacitacionDTO]),
    __metadata("design:returntype", Promise)
], CapacitacionController.prototype, "post", null);
CapacitacionController = __decorate([
    (0, common_1.Controller)('capacitacion'),
    __metadata("design:paramtypes", [capacitacion_service_1.CapacitacionService])
], CapacitacionController);
exports.CapacitacionController = CapacitacionController;
//# sourceMappingURL=capacitacion.controller.js.map