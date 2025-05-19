"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceModel = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    startDate: { type: Date, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
exports.ExperienceModel = (0, mongoose_1.model)('Experience', experienceSchema);
