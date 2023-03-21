"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = exports.tuplePareCreator = void 0;
// Область видимости типов Дженерика
// Пример с обчным замыканием
function tuplePareCreator(first) {
    return function (second) {
        return [first, second]; // Функция внутри так же знает какого типа аргументы у верхней функции
    };
}
exports.tuplePareCreator = tuplePareCreator;
const toTupleWithOne = tuplePareCreator(1); // то есть если мыпередали сюда 1, то получаем в first - number
const val6 = toTupleWithOne(2); // А вот если мы вызовем получившуюся функцию то она запомнит все данные и типы с прошлого вызова
const val7 = toTupleWithOne('fasf'); // и return нам картеж number'ов 
function createMap(list) {
    return function (cb) {
        const result = [];
        for (const key of list) {
            result.push(cb(key));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
console.log(result);
