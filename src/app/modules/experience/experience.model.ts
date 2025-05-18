import { Schema, model } from 'mongoose';

const experienceSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    startDate: { type: Date, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const ExperienceModel = model('Experience', experienceSchema);
