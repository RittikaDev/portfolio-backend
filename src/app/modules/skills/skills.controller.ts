import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skills.service';

const getAllSkills = catchAsync(async (_req: Request, res: Response) => {
  const result = await SkillService.getAllSkillsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skills retrieved successfully',
    data: result,
  });
});

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkillIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill created successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.updateSkillIntoDB(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.deleteSkillFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
