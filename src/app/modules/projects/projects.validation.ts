import { z } from 'zod';

// Define the IFrontBackProject schema
const frontBackProjectSchema = z.object({
  technologies: z.array(z.string()).min(1), // Array of non-empty strings
  deploymentLink: z.string().url(), // URL string
  github: z.string().url(), // URL string
});

// Define the IProject schema
const projectValidationSchema = z.object({
  title: z.string().min(1), // Non-empty string
  slug: z.string().min(1), // Non-empty string
  brief: z.string().min(1), // Non-empty string
  description: z.array(z.string()).default([]),
  cover: z.string().min(1), // Non-empty string
  images: z.array(z.string()).default([]),
  type: z.string().min(1), // Non-empty string
  frontend: frontBackProjectSchema, // Frontend validation
  backend: frontBackProjectSchema, // Backend validation
});

export const ProjectValidationSchema = {
  projectValidationSchema,
};
