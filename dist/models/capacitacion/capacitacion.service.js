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
exports.CapacitacionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CapacitacionService = class CapacitacionService {
    constructor(capacitacionModel) {
        this.capacitacionModel = capacitacionModel;
    }
    async getTodo() {
        const capacitacion = await this.capacitacionModel.find();
        return capacitacion;
    }
    async getPorId(capacitacionId) {
        const capacitacion = await this.capacitacionModel.findById(capacitacionId);
        return capacitacion;
    }
    async post(capacitacionDTO) {
        const capacitacion = new this.capacitacionModel(capacitacionDTO);
        await capacitacion.save();
        return capacitacion;
    }
};
CapacitacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Capacitacion')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CapacitacionService);
exports.CapacitacionService = CapacitacionService;
//# sourceMappingURL=capacitacion.service.js.map