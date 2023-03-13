"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RolSchema = new mongoose_1.Schema({
    clave: String,
    nombre: String,
    tipo: String,
    orden: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=rol.schema.js.map