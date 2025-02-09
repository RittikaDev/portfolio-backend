import AppError from '../../errors/AppError';
import { IProject } from './projects.interface';
import { ProjectModel } from './projects.model';
import httpStatus from 'http-status-codes';

const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find().sort({ createdAt: -1 });
  return result;
};

const createProjectIntoDB = async (project: IProject) => {
  const result = await ProjectModel.create(project);
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findOne({ _id: id }); // SEARCHING BY THE MONGODB _ID
  // console.log(result);
  return result;
};

const updateAProject = async (
  projectId: string,
  updateProjectData: Partial<IProject>,
) => {
  // FETCH THE CAR FROM THE DATABASE TO CHECK ITS CURRENT STATUS
  const existingProject = await ProjectModel.findById(projectId);

  if (!existingProject)
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found!');

  // PROCEED WITH THE UPDATE
  const result = await ProjectModel.findByIdAndUpdate(
    projectId,
    updateProjectData,
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

const deleteAProjectFromDB = async (id: string) => {
  const isProjectExists = await ProjectModel.findById(id);

  if (!isProjectExists)
    throw new AppError(httpStatus.BAD_REQUEST, 'Project does not exist');

  const deletedCar = await ProjectModel.findByIdAndDelete(id);

  return deletedCar;
};

export const ProjectService = {
  getAllProjectsFromDB,
  createProjectIntoDB,
  getSingleProjectFromDB,

  updateAProject,
  deleteAProjectFromDB,
};
