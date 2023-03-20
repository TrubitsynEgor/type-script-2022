const numbers = [1, 2, 4, 6, 7]

const srings: string[] = []
const srings2: Array<string> = []
srings.push('Ffarf');

interface Car {
	wheels: number;
	brand: string;

}

const cars: Car[] = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' })

const arrOfArr: string[][] = []
arrOfArr.push(['Ffasf'])

function printArr(arr: unknown[]): void {
	arr.forEach(el => console.log(el)
	)
}