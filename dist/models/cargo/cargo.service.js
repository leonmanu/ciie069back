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
exports.CargoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CargoService = class CargoService {
    constructor(cargoModel) {
        this.cargoModel = cargoModel;
    }
    async create(cargoDTO) {
        const cargo = new this.cargoModel(cargoDTO);
        await cargo.save();
        return cargo;
    }
    async findAll() {
        const cargos = await this.cargoModel.find();
        return cargos;
    }
    async findOneId(id) {
        const cargo = await this.cargoModel.findById(id);
        return cargo;
    }
    async findOneClave(clave) {
        const cargo = await this.cargoModel.findOne({ clave: clave });
        return cargo;
    }
    async delete(id) {
        await this.cargoModel.findByIdAndDelete(id);
    }
    async update(id, cargoDTO) {
        const cargo = await this.cargoModel.findByIdAndUpdate(id, cargoDTO, { new: true });
        return cargo;
    }
};
CargoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cargo')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CargoService);
exports.CargoService = CargoService;
//# sourceMappingURL=cargo.service.js.map