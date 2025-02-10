"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidationSchema = void 0;
const zod_1 = require("zod");
// Define the IFrontBackProject schema
const frontBackProjectSchema = zod_1.z.object({
    technologies: zod_1.z.array(zod_1.z.string()).min(1), // Array of non-empty strings
    deploymentLink: zod_1.z.string().url(), // URL string
    github: zod_1.z.string().url(), // URL string
});
// Define the IProject schema
const projectValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1), // Non-empty string
    slug: zod_1.z.string().min(1), // Non-empty string
    brief: zod_1.z.string().min(1), // Non-empty string
    description: zod_1.z.array(zod_1.z.string()).default([]),
    cover: zod_1.z.string().min(1), // Non-empty string
    images: zod_1.z.array(zod_1.z.string()).default([]),
    type: zod_1.z.string().min(1), // Non-empty string
    frontend: frontBackProjectSchema, // Frontend validation
    backend: frontBackProjectSchema, // Backend validation
});
const updateProjectValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(), // Non-empty string
    slug: zod_1.z.string().min(1).optional(), // Non-empty string
    brief: zod_1.z.string().min(1).optional(), // Non-empty string
    description: zod_1.z.array(zod_1.z.string()).default([]).optional(),
    cover: zod_1.z.string().min(1).optional(), // Non-empty string
    images: zod_1.z.array(zod_1.z.string()).default([]).optional(),
    type: zod_1.z.string().min(1).optional(), // Non-empty string
    frontend: frontBackProjectSchema.optional(), // Frontend validation
    backend: frontBackProjectSchema.optional(), // Backend validation
});
exports.ProjectValidationSchema = {
    projectValidationSchema,
    updateProjectValidationSchema,
};
