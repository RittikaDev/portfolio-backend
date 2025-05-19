"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsModel = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Still needed for the index
    },
});
// Create a **case-insensitive unique index**
skillSchema.index({ title: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });
exports.SkillsModel = (0, mongoose_1.model)('Skill', skillSchema);
