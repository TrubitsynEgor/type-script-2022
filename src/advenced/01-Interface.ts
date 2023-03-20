export interface IUser {
	readonly email: string,
	readonly login: string,
	password: string,
}

interface IUser {
	isOnline?: boolean,
}

// interface Window {
// 	isAuth?: boolean
// }
// window.isAuth

interface IPerson {
	readonly firstName: string,
	lastName: string,
	phone?: string,
	yearOfBirth?: number
}

interface IEmployee extends IUser, IPerson {
	contractStart: Date,
}

interface IDeveloper extends IEmployee {
	skills: string[],
	phone: string,
	level?: 'junior' | 'middle' | 'senior',
	say(): void,
	code(arg: string):
}

