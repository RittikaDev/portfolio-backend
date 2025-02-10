import { Request, Response } from 'express';

import httpStatus from 'http-status-codes';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Featured cars retrieved successfully',
    data: result,
  });
});

const createABlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const result = await BlogService.getSingleBlogFromDB(blogId);

  if (result != null) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog retrieved successfully',
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

const updateABlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
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

  const result = await BlogService.updateABlog(blogId, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteABlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const result = await BlogService.deleteABlogFromDB(blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const BlogController = {
  getAllBlog,
  createABlog,
  getSingleBlog,

  updateABlog,
  deleteABlog,
};
