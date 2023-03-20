function sum(a: number, b: number): number {
	return a + b;
}
const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
	return a + b;
}

sum(5, 5);

function log(name: string, userId?: string): void {
	console.log('hello', name, 'with ID', userId || 'Anonimus');

}
log('Misha', '5252')


function crash(): never {
	throw new Error('crash')
}

function average(...nums: number[]) {
	const sum = nums.reduce((current, total) => current + total, 0)
	return sum / nums.length
}


function slice(str: string, start: number, end?: number): string {
	let newString = '';
	let lastIndex: number;

	if (end) {
		lastIndex = end > str.length ? str.length : end
	} else {
		lastIndex = str.length
	}
	for (let i = start; i < lastIndex; i++) {
		newString += str[i]
	}

	return newString;
}


function printPoint(point: { x: string, y: string }): void {
	console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);

}

const obj1 = {
	x: '1',
	y: '2'
}
printPoint(obj1)

const obj2 = {
	x: '1',
	y: '2',
	z: '4'
}

printPoint(obj2);


function printName(user: { firstName: string, lastName?: string }): void {
	console.log('Hello', user.firstName.toUpperCase());
	if (user.lastName) {
		console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
	}
}
printName({ firstName: 'Egor' })
printName({ firstName: 'Egor', lastName: 'Fgdfsdfds' })

