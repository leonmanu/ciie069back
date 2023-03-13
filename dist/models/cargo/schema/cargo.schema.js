"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CargoSchema = new mongoose_1.Schema({
    cupof: String,
    clave: String,
    rol: { type: mongoose_1.Schema.Types.ObjectId, ref: 'rol' },
    area: { type: mongoose_1.Schema.Types.ObjectId, ref: 'area' },
    cargaHoraria: Number,
    institucion: { type: mongoose_1.Schema.Types.ObjectId, ref: 'institucion' },
    designacion: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'designacion' }],
    createAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=cargo.schema.js.map