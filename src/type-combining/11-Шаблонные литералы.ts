export { }

//todo Шаблонные литеральные типы основаны на строковых литеральных типах 
//todo и имеют возможность расширения на множество строк с помощью unions.

type Side = 'top' | 'right' | 'bottom' | 'left'
type Margin = `margin${'' | Capitalize<Side>}`
type Padding = `padding${'' | Capitalize<Side>}`

// todo Чтобы помочь в работе со строками вокруг шаблонных строковых литералов,
//todo  TypeScript включает набор типов, которые можно использовать для работы со строками в системе типов
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>


//More example:
type Direction = 'down' | 'left' | 'right' | 'top';
type Position = 'top' | 'bottom'
type Entry = 'in' | 'out'

type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`
////////////////////////////

interface Car {
	brand: string
	model: string
	year: number
}

type CarFactory = {
	[K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}