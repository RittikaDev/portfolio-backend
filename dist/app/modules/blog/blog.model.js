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
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    brief: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: Object, // or type: mongoose.Schema.Types.Mixed
        required: true, // This will be your TipTap JSON or HTML
    },
    cover: {
        type: String, // URL
    },
    publishedDate: {
        type: String,
        required: true,
    },
    readTime: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Create and export the model
exports.BlogModel = (0, mongoose_1.model)('Blog', BlogSchema);
