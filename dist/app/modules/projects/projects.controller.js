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
exports.ProjectController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const projects_service_1 = require("./projects.service");
const getAllProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectService.getAllProjectsFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: 'Featured cars retrieved successfully',
        data: result,
    });
}));
const createAProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectService.createProjectIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Project created successfully',
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const result = yield projects_service_1.ProjectService.getSingleProjectFromDB(projectId);
    if (result != null) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.default.OK,
            success: true,
            message: 'Car retrieved successfully',
            data: result,
        });
    }
    else
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.default.NOT_FOUND,
            success: false,
            message: 'No Data Found',
            data: [],
        });
}));
const updateAProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const updateData = req.body;
    // AT LEAST HAS TO BE PROVIDED
    if (Object.keys(updateData).length === 0) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.default.BAD_REQUEST,
            success: false,
            message: 'At least one field must be provided for update',
            data: [],
        });
        return;
    }
    const result = yield projects_service_1.ProjectService.updateAProject(projectId, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Project updated successfully',
        data: result,
    });
}));
const deleteAProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const result = yield projects_service_1.ProjectService.deleteAProjectFromDB(projectId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Project deleted successfully',
        data: result,
    });
}));
exports.ProjectController = {
    getAllProjects,
    createAProject,
    getSingleProject,
    updateAProject,
    deleteAProject,
};
