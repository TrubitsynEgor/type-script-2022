// Кортежи тот же массив но ограничен неким колличеством элементов

const pairs: [string, string][] = [['key', 'value'], ['key2', 'value2'],]

// Aliases
type MyBolean = false | true

type Pair = [string, string];
type Pairs = Pair[]

type diffCar = {
	wheels: number;
	brand: string;
	type: string;
	isNew?: boolean;
	name?: string;

	[key: string]: unknown;
}