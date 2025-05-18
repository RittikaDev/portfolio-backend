import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Still needed for the index
  },
});

// Create a **case-insensitive unique index**
skillSchema.index(
  { title: 1 },
  { unique: true, collation: { locale: 'en', strength: 2 } },
);

export const SkillsModel = model('Skill', skillSchema);
