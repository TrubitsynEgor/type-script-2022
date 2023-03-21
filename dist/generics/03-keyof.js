"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
const myValue = 'ontoggle';
// keyof - это ключевое слово в TypeScript, которое используется для извлечения типа ключа из типа объекта.
const val1 = "brand";
const val2 = '0';
// keyof по сути создает юнион некоторых значений, и может помоч в создании дженериков и в сужении допустимых значений к нему
function prop(key, obj) {
    return obj[key]; // U сокращаем до возможных значений то есть обратись к ключам объекта T создай юнион из этих ключей
    // И сохрани мне их в переменную! А потом указываем что на U Является типом для арг key а пернем мы соответственно T[U]
}
const obj5 = {
    a: 1,
    b: 2,
    c: 3,
};
prop('a', obj5); // Таким образом мы проверяем есть ли ключ 'a' в obj5 Если есть то все в порядке TS пропускает такой вызов
// prop('d', obj5) // Если в нашем obj5 нету ключа с значением 'd' то TS Прокинет ошибку
function keys(obj) {
    const currentKeys = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            currentKeys.push(key);
        }
    }
    return currentKeys;
}
exports.keys = keys;
console.log(keys([4, 6, 7]));
function values(obj) {
    const currentValues = [];
    for (const key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
