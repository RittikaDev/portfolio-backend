import { Request, Response } from 'express';
import { ExperienceService } from './experience.service';
import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getAllExperiencesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experiences retrieved successfully',
    data: result,
  });
});

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Experience created successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.updateExperienceIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.deleteExperienceFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const ExperienceController = {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
