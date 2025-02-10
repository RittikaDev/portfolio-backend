import { Request, Response } from 'express';

import httpStatus from 'http-status-codes';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { ContactService } from './contact.service';

const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.createContactMessage(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message send successfully',
    data: result,
  });
});

const getAllMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getAllMessagesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All messages retrieved successfully',
    data: result,
  });
});

export const ContactController = {
  sendMessage,
  getAllMessages,
};
