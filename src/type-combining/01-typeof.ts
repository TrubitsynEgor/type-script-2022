import { average } from "../02-functions";
//typeof есть в обычном JS это проверка на тип //*return string соответствующий проверяймому операнду
// Prints "string"
console.log(typeof "Hello world");

//todo TypeScript добавляет оператор typeof, который можно использовать в контексте типа для ссылки на тип переменной или свойства: 
let s = "hello";
let n: typeof s; // let n: string

// Мы к примеру инпортировали некую функцию со сложно типизацией и чтобы не описывать ее заново мы просто
// создали aliases и указали через typeof на нашу функцию. 
//* Это максимально полезно если нужна типизация какой то сложной сущности взятой к примеру из сторонней либры

type fn = typeof average; //  type fn = (...nums: number[]) => number
const max: fn = (...numbers) => Math.max(...numbers)

//todo  В TS Так же есть утилита по умолчанию которая называется <ReturnType>
type returnFg = ReturnType<typeof average> // type returnFg = number
// То Есть мы говорим вот тебе функция определи какой это тип и какой тип она return
// И таким образом наш новый alias будет равен ВОЗВРАЩАЕМОМУ значению нашей function average [number]