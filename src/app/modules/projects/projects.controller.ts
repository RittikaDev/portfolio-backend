import { Request, Response } from 'express';

import httpStatus from 'http-status-codes';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { ProjectService } from './projects.service';

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjectsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Featured cars retrieved successfully',
    data: result,
  });
});

const createAProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await ProjectService.getSingleProjectFromDB(projectId);

  if (result != null) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    });
  } else
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    });
});

const updateAProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const updateData = req.body;

  // AT LEAST HAS TO BE PROVIDED
  if (Object.keys(updateData).length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'At least one field must be provided for update',
      data: [],
    });
    return;
  }

  const result = await ProjectService.updateAProject(projectId, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteAProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await ProjectService.deleteAProjectFromDB(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const ProjectController = {
  getAllProjects,
  createAProject,
  getSingleProject,
  updateAProject,
  deleteAProject,
};
