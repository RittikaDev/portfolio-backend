"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const frontendSchema = new mongoose_1.Schema({
    technologies: {
        type: [String],
        required: true,
    },
    deploymentLink: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
});
const backendSchema = new mongoose_1.Schema({
    technologies: {
        type: [String],
        required: true,
    },
    deploymentLink: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
});
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: false,
    },
    brief: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },
    cover: { type: String, required: false },
    images: {
        type: [String],
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    frontend: {
        type: frontendSchema,
    },
    backend: {
        type: backendSchema,
    },
});
exports.ProjectModel = (0, mongoose_1.model)('Project', projectSchema);
