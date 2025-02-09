import { Schema, model } from 'mongoose';
import { IBlog, IBlogContent } from './blog.interface';

// Define the blog content schema
const contentSchema = new Schema<IBlogContent>({
  type: {
    type: String,
    enum: ['heading1', 'heading2', 'heading3', 'paragraph', 'list', 'code'],
    required: true,
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
const blogSchema = new Schema<IBlog>(
  {
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
      required: true,
    },
    slug: {
      type: String,
      required: true,
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
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  },
);

// Create and export the model
export const BlogModel = model('Blog', blogSchema);
