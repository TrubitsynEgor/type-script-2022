type WindowProp = keyof Window;

const myValue: WindowProp = 'ontoggle'

interface PC {
	brand: string,
	year: string,
}

type Typ1 = keyof PC
// keyof - это ключевое слово в TypeScript, которое используется для извлечения типа ключа из типа объекта.
const val1: Typ1 = "brand";

type Tup1 = keyof [string, number] // Получим ключи 0 и 1 по индексу 
const val2: Tup1 = '0'
// keyof по сути создает юнион некоторых значений, и может помоч в создании дженериков и в сужении допустимых значений к нему


function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
	return obj[key]; // U сокращаем до возможных значений то есть обратись к ключам объекта T создай юнион из этих ключей
	// И сохрани мне их в переменную! А потом указываем что на U Является типом для арг key а пернем мы соответственно T[U]
}

const obj5 = {
	a: 1,
	b: 2,
	c: 3,
}
prop('a', obj5) // Таким образом мы проверяем есть ли ключ 'a' в obj5 Если есть то все в порядке TS пропускает такой вызов
// prop('d', obj5) // Если в нашем obj5 нету ключа с значением 'd' то TS Прокинет ошибку



export function keys<T extends object>(obj: T) {
	const currentKeys = [];

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			currentKeys.push(key)
		}
	}
	return currentKeys
}

console.log(keys([4, 6, 7]));


export function values<T extends object>(obj: T) {
	const currentValues = [];

	for (const key in obj) {
		currentValues.push(obj[key])
	}
	return currentValues
}



