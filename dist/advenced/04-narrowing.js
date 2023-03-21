"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = void 0;
function example01(x) {
    if (typeof x === 'string') {
        x.toLowerCase();
    }
    else if (typeof x === 'number') {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x;
    }
}
function example02(strs) {
    // if(typeof strs === 'object') {} Но в этой ситуации null тоже объект в JS поэтому нужно проверять иначе
    //Хотя в случае с массивом есть проверка //todo Array.isArray(strs)
    if (strs && typeof strs === 'object') { // Потому сперва проверяем не пустое ли значение вовсе?
        strs.push(); // В этом случае TS точно теперь знает что strs это array!
    }
    else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}
function example03(x) {
    if (x instanceof Date) {
        x.getTime();
    }
    else {
        x.push();
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
exports.move = move;
