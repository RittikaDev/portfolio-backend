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

export const ProjectModel = model('Project', projectSchema);
