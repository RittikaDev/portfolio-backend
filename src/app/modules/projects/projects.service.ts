import { IProject } from './projects.interface';
import { ProjectModel } from './projects.model';

const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find().sort({ createdAt: -1 });
  return result;
};

const createProjectIntoDB = async (project: IProject) => {
  const result = await ProjectModel.create(project);
  return result;
};

export const ProjectService = {
  getAllProjectsFromDB,
  createProjectIntoDB,
};
