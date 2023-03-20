interface IUser {
	login: string;
	email?: string;
	password: string;
	isOnline?: boolean;
	lastVisited?: Date
}
interface IAdmin {
	login: string;
	email: string;
	password: string;
	isOnline: boolean;
	lastVisited: Date;
	role: string;
}

export function login(user: { login: string, password: string }): void {
	if (user.login && user.password) {
		console.log('Greeting mr.' + user.login);

	}
}

const mtObj: IUser = {
	login: 'Egor',
	password: 'FGgsdgsdggsdg'
}
login(mtObj)