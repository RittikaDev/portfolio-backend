export interface IBlogContent {
  type: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'list' | 'code';
  text?: string;
  items?: string[];
  language?: string;
  code?: string;
}

// Define the blog interface
export interface IBlog extends Document {
  title: string;
  brief: string;
  cover: string;
  slug: string;
  publishedDate: string;
  readTime: string;
  content: IBlogContent[];
}
