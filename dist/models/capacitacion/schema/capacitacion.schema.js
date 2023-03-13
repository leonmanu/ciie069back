"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacitacionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CapacitacionSchema = new mongoose_1.Schema({
    nombre: String,
    clave: String,
    area: String,
    cursante: [],
    createAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=capacitacion.schema.js.map