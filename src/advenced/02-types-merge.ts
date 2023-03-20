type Union1 = 'a' | 'g' | 'c' | 'd';
type Union2 = 'a' | 'c' | 'n' | 'm';

type Union3 = Union1 | Union2; // 'a' | 'g' | 'c' | 'd' | 'n' | 'm'
type Union4 = Union1 & Union2; // "a" | "c"

type Union5 = { a: string, b: string, c: number } & { a: string, t: boolean, z: null }


type IUser = {
	readonly email: string,
	readonly login: string,
	password: string,
}



type IPerson = {
	readonly firstName: string,
	lastName: string,
	phone?: string,
	yearOfBirth?: number
}

type IEmployee = {
	contractStart: Date,
} & IUser & IPerson


type IDeveloper = {
	skills: string[],
	phone: string,
	level?: 'junior' | 'middle' | 'senior',
	say(): void,
	code(arg: string): void,
} & IEmployee

const user: IDeveloper = {

}