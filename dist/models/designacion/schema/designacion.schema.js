"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignacionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DesignacionSchema = new mongoose_1.Schema({
    cargo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'cargo' },
    docente: { type: mongoose_1.Schema.Types.ObjectId, ref: 'docente' },
    desde: Date,
    hasta: Date,
    institucion: { type: mongoose_1.Schema.Types.ObjectId, ref: 'institucion' },
    createAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=designacion.schema.js.map