//todo: Exclude: Создает тип, исключая из UnionType все члены union'a, которые могут быть присвоены ExcludedMembers.
// Иначе говоря, присвой типы до запятой и вычти все после запятой, 
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;// Присвоить 'a' 'b' 'c' но вычти 'a' //* type T0 = "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;// Присвоить 'a' 'b' 'c' но вычти 'a' 'b' //* type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; // Присвоить string number function, вычти любую Function
//* type T2 = string | number

// Использование:
// Предположим у нас есть union в котором мы по разному описываем какие то статусы:
type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504
// И мы хотти с узить это и сказать пусть будет только числовые статусы
type NumericStatus = Exclude<Status, string> // То есть мы говорим оставь мне статусы но убери все status string
//* type NumericStatus = 200 | 401 | 504
//todo Точно так же можно и наоборот
type TextStatus = Exclude<Status, number> //* type TextStatus = "success" | "clientError" | "serverError"


//todo Extract<Type, Union>: Конструирует тип, извлекая из Type все члены union'a, которые могут быть присвоены Union.
// Делает то же самое но наоборот, type после запятой не исключает а наоборот говорит что нужно его подставить
type T4 = Extract<"a" | "b" | "c", "a" | "f">; // То есть найди мне в union 'a' и 'f' И если такие есть то присвой тип
//* type T4 = "a"
type T5 = Extract<string | number | (() => void), Function>;//Найди мне любую func и присвой ее
//* type T5 = () => void

//! Exclude - ИСКЛЮЧИ, Extract - ИЗВЛЕКИ



//Допустим у нас есть некий интерфейс и мы хотим использовать типы из него связанные только с именами! 
interface Person {
	age: number,
	firstName: string,
	lastName: string,
	sex: 'male' | 'famale',
	country: string,
	education: string,
	skills: string[]
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>
//* type PersonNames = "firstName" | "lastName"
// Так же и наоборот можно получить все типы КРОМЕ Имен
type PersonNames2 = Exclude<keyof Person, 'firstName' | 'lastName' | 'fullName'>
//* type PersonNames2 = "age" | "sex" | "country" | "education" | "skills"



//todo NonNullable<Type>: Конструирует тип, исключая null и undefined из Type.
// Тут все просто, удаляет null и(или) undefined из типов если они есть 
type T7 = NonNullable<string | number | undefined>; //* type T7 = string | number
type T8 = NonNullable<string[] | null | undefined>; //* type T8 = string[]




export { }