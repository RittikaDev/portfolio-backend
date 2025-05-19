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
exports.SkillService = void 0;
const skills_model_1 = require("./skills.model");
const getAllSkillsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield skills_model_1.SkillsModel.find();
});
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
const createSkillIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedTitle = capitalizeFirstLetter(payload.title.trim());
    // Check for case-insensitive duplicate
    const exists = yield skills_model_1.SkillsModel.findOne({ title: formattedTitle }).collation({ locale: 'en', strength: 2 });
    if (exists) {
        throw new Error('Skill already exists');
    }
    return yield skills_model_1.SkillsModel.create({ title: formattedTitle });
});
const updateSkillIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skills_model_1.SkillsModel.findByIdAndUpdate(id, payload, { new: true });
});
const deleteSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skills_model_1.SkillsModel.findByIdAndDelete(id);
});
exports.SkillService = {
    getAllSkillsFromDB,
    createSkillIntoDB,
    updateSkillIntoDB,
    deleteSkillFromDB,
};
