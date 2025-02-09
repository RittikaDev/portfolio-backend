import { Schema, model } from 'mongoose';
import { IFrontBackProject, IProject } from './projects.interface';

const frontendSchema = new Schema<IFrontBackProject>({
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

const backendSchema = new Schema<IFrontBackProject>({
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

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  cover: { type: String, required: [true, 'Image URL is required'] },
  images: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  frontend: {
    type: frontendSchema,
  },
  backend: {
    type: backendSchema,
  },
});

export const ProjectModel = model('Project', projectSchema);
