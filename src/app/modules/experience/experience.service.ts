import { ExperienceModel } from './experience.model';

const getAllExperiencesFromDB = async () => {
  return await ExperienceModel.find().sort({ startDate: 1 });
};

const createExperienceIntoDB = async (payload: any) => {
  return await ExperienceModel.create(payload);
};

const updateExperienceIntoDB = async (id: string, payload: any) => {
  return await ExperienceModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteExperienceFromDB = async (id: string) => {
  return await ExperienceModel.findByIdAndDelete(id);
};

export const ExperienceService = {
  getAllExperiencesFromDB,
  createExperienceIntoDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
};
