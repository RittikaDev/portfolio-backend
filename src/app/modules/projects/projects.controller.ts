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

export const ProjectController = {
  getAllProjects,
  createAProject,
  getSingleProject,
};
