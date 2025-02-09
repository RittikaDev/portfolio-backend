import { IBlog } from './blog.interface';
import { BlogModel } from './blog.model';

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

export const BlogService = {
  getAllBlogFromDB,
  createBlogIntoDB,
  getSingleBlogFromDB,
};
