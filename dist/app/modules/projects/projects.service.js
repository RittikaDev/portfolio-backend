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
exports.ProjectService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const projects_model_1 = require("./projects.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.ProjectModel.find().sort({ createdAt: -1 });
    return result;
});
const createProjectIntoDB = (project) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.ProjectModel.create(project);
    return result;
});
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.ProjectModel.findOne({ _id: id }); // SEARCHING BY THE MONGODB _ID
    // console.log(result);
    return result;
});
const updateAProject = (projectId, updateProjectData) => __awaiter(void 0, void 0, void 0, function* () {
    // FETCH THE CAR FROM THE DATABASE TO CHECK ITS CURRENT STATUS
    const existingProject = yield projects_model_1.ProjectModel.findById(projectId);
    if (!existingProject)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'Project not found!');
    // PROCEED WITH THE UPDATE
    const result = yield projects_model_1.ProjectModel.findByIdAndUpdate(projectId, updateProjectData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteAProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectExists = yield projects_model_1.ProjectModel.findById(id);
    if (!isProjectExists)
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Project does not exist');
    const deletedCar = yield projects_model_1.ProjectModel.findByIdAndDelete(id);
    return deletedCar;
});
exports.ProjectService = {
    getAllProjectsFromDB,
    createProjectIntoDB,
    getSingleProjectFromDB,
    updateAProject,
    deleteAProjectFromDB,
};
