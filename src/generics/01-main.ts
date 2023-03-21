// Generics 
// Взгянем на наш пример с перегрузкой функций, в нашем случае код не такой большой
// function head(value: string): string;// Но если бы нужно было описать 15 разных типов? 
// function head(value: number[]): number; // Масивы масивовб массивы объектов, мфсивы Date и тд
// function head(value: boolean[]): boolean;
// function head(value: any) {
// 	return value[0]
// }

// interface IModelData {
// 	title: string,
// 	value: string, // Сейчас он стринг но вдруг он захочет быть number or boolean[] или еще что
// }


//Syntax: 
Array<string> // Array строк
Promise<number> // Промис ретурнит number

type TypeFactory<T> = T// По факту мы написали что то похожее на функб которая что то принемает и что то возвращает
// <T> эта часть является динамической, можем написать даже несколько параметров <T,U> но и передавать мы должны два параметра
type XType = TypeFactory<string> // наш XType таким образом станет string
type XType2 = TypeFactory<boolean>// наш XType2 таким образом станет boolean
type XType3 = TypeFactory<number>// наш XType3 таким образом станет number


export function toArray<T>(...arg: T[]): T[] {
	return arg
}
toArray(1, 2, 3,);
toArray('1, 2, 3', 'gagag')

// Попытаемся написать generic для нашего примера с overload

// Взгянем на наш пример с перегрузкой функций, в нашем случае код не такой большой
function head(value: string): string;// Но если бы нужно было описать 15 разных типов? 
function head<T>(value: T[]): T; // Масивы масивовб массивы объектов, мфсивы Date и тд
function head(value: boolean[]): boolean;
function head(value: any) {
	return value[0]
}

interface IModelData<T> {
	title: string,
	value: T, // Сейчас он стринг но вдруг он захочет быть number or boolean[] или еще что
}

const obj2: IModelData<number> = {
	title: 'adsa',
	value: 12
}

const obj3: IModelData<Array<number>> = {
	title: 'fafa',
	value: [111],
}

