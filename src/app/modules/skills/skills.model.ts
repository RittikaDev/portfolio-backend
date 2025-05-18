import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export const SkillsModel = model('Skill', skillSchema);
