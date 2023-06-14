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
exports.CargoController = void 0;
const common_1 = require("@nestjs/common");
const cargo_service_1 = require("./cargo.service");
const cargo_dto_1 = require("./dto/cargo.dto");
let CargoController = class CargoController {
    constructor(cargoService) {
        this.cargoService = cargoService;
    }
    async post(res, cargoDTO) {
        console.log(cargoDTO);
        const cargo = await this.cargoService.post(cargoDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'recived',
            cargoCreado: cargo
        });
    }
    async get() {
        const cargo = await this.cargoService.get();
        return cargo;
    }
};
__decorate([
    (0, common_1.Post)('/crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cargo_dto_1.CargoDTO]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "post", null);
__decorate([
    (0, common_1.Get)('/todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "get", null);
CargoController = __decorate([
    (0, common_1.Controller)('cargo'),
    __metadata("design:paramtypes", [cargo_service_1.CargoService])
], CargoController);
exports.CargoController = CargoController;
//# sourceMappingURL=cargo.controller.js.map