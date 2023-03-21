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
exports.request = void 0;
function request(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url); // прям как арг в функ по умолч так же можем написать что
        return response.json(); // некий наш дженерик T будет по умолчанию равен описанному нами интерфейсу (то есть объекту)
    });
} // Тогда на выходе мы получим Promise<AnyObj>
exports.request = request;
const data = request(''); // Так же при запросе мы можем указать какой тип мы ожидаем получить
// В нашем случае мы описали Todo и ожидаем получить массив этих Todo ну и на выходе получим Promise<Todo[]>
