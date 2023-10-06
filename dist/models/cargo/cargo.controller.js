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
    async create(res, cargoDTO) {
        const cargo = await this.cargoService.create(cargoDTO);
        return res.status(common_1.HttpStatus.CREATED).json({
            message: 'Cargo creado exitosamente',
            cargoCreado: cargo
        });
    }
    async findAll() {
        const cargos = await this.cargoService.findAll();
        return cargos;
    }
    async findOneId(res, id) {
        const cargo = await this.cargoService.findOneId(id);
        console.log("cargoBack: " + cargo);
        if (!cargo) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cargo encontrado exitosamente',
            cargoEncontrado: cargo,
        });
    }
    async findOneClave(res, clave) {
        const cargo = await this.cargoService.findOneClave(clave);
        console.log("cargoBack: " + cargo);
        if (!cargo) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cargo encontrado exitosamente',
            cargoEncontrado: cargo,
        });
    }
    async remove(res, id) {
        await this.cargoService.delete(id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cargo eliminado exitosamente',
        });
    }
    async update(res, id, cargoDTO) {
        const cargo = await this.cargoService.update(id, cargoDTO);
        if (!cargo) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cargo actualizado exitosamente',
            cargoActualizado: cargo,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cargo_dto_1.CargoDTO]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findOneId", null);
__decorate([
    (0, common_1.Get)(':clave'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('clave')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findOneClave", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, cargo_dto_1.CargoDTO]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "update", null);
CargoController = __decorate([
    (0, common_1.Controller)('cargo'),
    __metadata("design:paramtypes", [cargo_service_1.CargoService])
], CargoController);
exports.CargoController = CargoController;
//# sourceMappingURL=cargo.controller.js.map