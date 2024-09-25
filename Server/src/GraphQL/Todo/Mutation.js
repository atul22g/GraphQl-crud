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
exports.updateTodo = exports.findTodo = exports.deleteTodo = exports.allTodo = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../../services/todo"));
const createTodo = (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield todo_1.default.createTodo(payload);
    return res;
});
exports.createTodo = createTodo;
const allTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield todo_1.default.allTodo();
    return res;
});
exports.allTodo = allTodo;
const deleteTodo = (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield todo_1.default.deleteTodo(payload);
    return res;
});
exports.deleteTodo = deleteTodo;
const findTodo = (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield todo_1.default.findTodo(payload);
    return res;
});
exports.findTodo = findTodo;
const updateTodo = (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield todo_1.default.updateTodo(payload);
    return res;
});
exports.updateTodo = updateTodo;
