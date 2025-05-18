import { Schema, model } from 'mongoose';
import { IBlog, IBlogContent } from './blog.interface';

// Define the blog content schema
const contentSchema = new Schema<IBlogContent>({
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
const BlogSchema = new Schema(
  {
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
  },
  { timestamps: true },
);

// Create and export the model
export const BlogModel = model('Blog', BlogSchema);
