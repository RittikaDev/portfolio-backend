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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const experience_model_1 = require("./experience.model");
const getAllExperiencesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield experience_model_1.ExperienceModel.find().sort({ startDate: 1 });
});
const createExperienceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield experience_model_1.ExperienceModel.create(payload);
});
const updateExperienceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield experience_model_1.ExperienceModel.findByIdAndUpdate(id, payload, { new: true });
});
const deleteExperienceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield experience_model_1.ExperienceModel.findByIdAndDelete(id);
});
exports.ExperienceService = {
    getAllExperiencesFromDB,
    createExperienceIntoDB,
    updateExperienceIntoDB,
    deleteExperienceFromDB,
};
