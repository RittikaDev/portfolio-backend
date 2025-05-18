import { SkillsModel } from './skills.model';

const getAllSkillsFromDB = async () => {
  return await SkillsModel.find();
};

const createSkillIntoDB = async (payload: { title: string }) => {
  return await SkillsModel.create(payload);
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
