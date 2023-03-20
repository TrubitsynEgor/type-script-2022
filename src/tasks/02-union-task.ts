type Level = 'Jun' | 'middle' | 'senior'

interface IDeveloper {
	login: string;
	skills: string[];
	level: Level;
}

const developer: IDeveloper = {
	login: 'Rgsdgsd',
	skills: ['Js', 'html', 'scss', 'react', 'redux', 'typescript'],
	level: 'Jun'
}

export function gradeDeveloper(developer: { login: string, level: Level }) {
	if (developer.level === 'Jun') {
		console.log(`Congraz! ${developer.login} Now you are middle developer! `);
		return { ...developer, level: 'middle' }
	}
	if (developer.level === 'middle') {
		console.log(`Congraz! ${developer.login} Now you are senior developer! `);
		return { ...developer, level: 'senior' }
	}
};

const gradeDev = gradeDeveloper(developer)
console.log(gradeDev);



