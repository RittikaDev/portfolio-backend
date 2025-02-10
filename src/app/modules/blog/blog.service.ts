import AppError from '../../errors/AppError';
import { IBlog } from './blog.interface';
import { BlogModel } from './blog.model';

import httpStatus from 'http-status-codes';

const getAllBlogFromDB = async () => {
  const result = await BlogModel.find().sort({ createdAt: -1 });
  return result;
};

const createBlogIntoDB = async (blog: IBlog) => {
  const result = await BlogModel.create(blog);
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findOne({ _id: id }); // SEARCHING BY THE MONGODB _ID
  // console.log(result);
  return result;
};

const updateABlog = async (blogId: string, updateBlogData: Partial<IBlog>) => {
  // FETCH THE CAR FROM THE DATABASE TO CHECK ITS CURRENT STATUS
  const existingBlog = await BlogModel.findById(blogId);

  if (!existingBlog)
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found!');

  // PROCEED WITH THE UPDATE
  const result = await BlogModel.findByIdAndUpdate(blogId, updateBlogData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteABlogFromDB = async (id: string) => {
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists)
    throw new AppError(httpStatus.BAD_REQUEST, 'Blog does not exist');

  const deletedBlog = await BlogModel.findByIdAndDelete(id);

  return deletedBlog;
};

export const BlogService = {
  getAllBlogFromDB,
  createBlogIntoDB,
  getSingleBlogFromDB,

  updateABlog,
  deleteABlogFromDB,
};
