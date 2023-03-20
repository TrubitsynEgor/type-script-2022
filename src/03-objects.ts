interface Car {
	wheels: number;
	brand: string;
	type: string;
	isNew?: boolean;
	name?: string;

	[key: string]: unknown;
}
const car: Car = {
	wheels: 4,
	brand: 'BMW',
	type: 'Sedan',
}

const car2: Car = {
	brand: 'Audi',
	wheels: 4,
	type: 'Coupe'
}