"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//typeof есть в обычном JS это проверка на тип //*return string соответствующий проверяймому операнду
// Prints "string"
console.log(typeof "Hello world");
//todo TypeScript добавляет оператор typeof, который можно использовать в контексте типа для ссылки на тип переменной или свойства: 
let s = "hello";
let n; // let n: string
const max = (...numbers) => Math.max(...numbers);
// То Есть мы говорим вот тебе функция определи какой это тип и какой тип она return
// И таким образом наш новый alias будет равен ВОЗВРАЩАЕМОМУ значению нашей function average [number]
