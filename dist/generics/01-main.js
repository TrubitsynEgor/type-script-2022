"use strict";
// Generics 
// Взгянем на наш пример с перегрузкой функций, в нашем случае код не такой большой
// function head(value: string): string;// Но если бы нужно было описать 15 разных типов? 
// function head(value: number[]): number; // Масивы масивовб массивы объектов, мфсивы Date и тд
// function head(value: boolean[]): boolean;
// function head(value: any) {
// 	return value[0]
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
// interface IModelData {
// 	title: string,
// 	value: string, // Сейчас он стринг но вдруг он захочет быть number or boolean[] или еще что
// }
//Syntax: 
Array; // Array строк
Promise; // Промис ретурнит number
function toArray(...arg) {
    return arg;
}
exports.toArray = toArray;
toArray(1, 2, 3);
toArray('1, 2, 3', 'gagag');
function head(value) {
    return value[0];
}
const obj2 = {
    title: 'adsa',
    value: 12
};
const obj3 = {
    title: 'fafa',
    value: [111],
};
