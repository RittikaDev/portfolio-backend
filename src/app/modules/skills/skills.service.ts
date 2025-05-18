import { SkillsModel } from './skills.model';

const getAllSkillsFromDB = async () => {
  return await SkillsModel.find();
};

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const createSkillIntoDB = async (payload: { title: string }) => {
  const formattedTitle = capitalizeFirstLetter(payload.title.trim());

  // Check for case-insensitive duplicate
  const exists = await SkillsModel.findOne({ title: formattedTitle }).collation(
    { locale: 'en', strength: 2 },
  );

  if (exists) {
    throw new Error('Skill already exists');
  }

  return await SkillsModel.create({ title: formattedTitle });
};

const updateSkillIntoDB = async (id: string, payload: { title: string }) => {
  return await SkillsModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteSkillFromDB = async (id: string) => {
  return await SkillsModel.findByIdAndDelete(id);
};

export const SkillService = {
  getAllSkillsFromDB,
  createSkillIntoDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
};
