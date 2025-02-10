"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const getAllBlogFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.find().sort({ createdAt: -1 });
    return result;
});
const createBlogIntoDB = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.create(blog);
    return result;
});
const getSingleBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.findOne({ _id: id }); // SEARCHING BY THE MONGODB _ID
    // console.log(result);
    return result;
});
const updateABlog = (blogId, updateBlogData) => __awaiter(void 0, void 0, void 0, function* () {
    // FETCH THE CAR FROM THE DATABASE TO CHECK ITS CURRENT STATUS
    const existingBlog = yield blog_model_1.BlogModel.findById(blogId);
    if (!existingBlog)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'Blog not found!');
    // PROCEED WITH THE UPDATE
    const result = yield blog_model_1.BlogModel.findByIdAndUpdate(blogId, updateBlogData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteABlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExists = yield blog_model_1.BlogModel.findById(id);
    if (!isBlogExists)
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Blog does not exist');
    const deletedBlog = yield blog_model_1.BlogModel.findByIdAndDelete(id);
    return deletedBlog;
});
exports.BlogService = {
    getAllBlogFromDB,
    createBlogIntoDB,
    getSingleBlogFromDB,
    updateABlog,
    deleteABlogFromDB,
};
