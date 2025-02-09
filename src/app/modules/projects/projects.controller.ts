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

export const ProjectController = {
  getAllProjects,
  createAProject,
};
