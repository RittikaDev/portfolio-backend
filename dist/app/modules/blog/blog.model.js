"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = require("mongoose");
// Define the blog content schema
const contentSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ['heading1', 'heading2', 'heading3', 'paragraph', 'list', 'code'],
        required: false,
    },
    text: {
        type: String,
    },
    items: {
        type: [String],
    },
    language: {
        type: String,
    },
    code: {
        type: String,
    },
});
// Define the main blog schema
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    brief: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: false,
    },
    slug: {
        type: String,
        required: false,
        unique: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    readTime: {
        type: String,
        required: true,
    },
    content: {
        type: [contentSchema],
        required: false,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt
});
// Create and export the model
exports.BlogModel = (0, mongoose_1.model)('Blog', blogSchema);
