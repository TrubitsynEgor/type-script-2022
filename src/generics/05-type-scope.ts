// Область видимости типов Дженерика
// Пример с обчным замыканием
export function tuplePareCreator<T>(first: T) {
	return function <U>(second: U): [T, U] {
		return [first, second] // Функция внутри так же знает какого типа аргументы у верхней функции
	}
}

const toTupleWithOne = tuplePareCreator(1) // то есть если мыпередали сюда 1, то получаем в first - number
const val6 = toTupleWithOne(2); // А вот если мы вызовем получившуюся функцию то она запомнит все данные и типы с прошлого вызова
const val7 = toTupleWithOne('fasf');// и return нам картеж number'ов 


export function createMap<T>(list: T[]) {
	return function <U>(cb: (x: T) => U): U[] {
		const result = [];

		for (const key of list) {
			result.push(cb(key))
		}
		return result
	}
}

const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2)
console.log(result);
