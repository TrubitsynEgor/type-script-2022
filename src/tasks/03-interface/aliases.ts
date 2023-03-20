interface IProduct {
	price: string,
	isNew: boolean,
	isSale?: boolean,
	title: string,
}
interface IVehicle {
	wheels: string,
	year: Date,
	brand: string,
}
interface ICar extends IProduct, IVehicle {
	type: string,
	model: string,
}


type Product = {
	price: string,
	isNew: boolean,
	isSale?: boolean,
	title: string,
}
type Vehicle = {
	wheels: string,
	year: Date,
	brand: string,
}
type TCar = {
	type: string,
	model: string,
} & IProduct & IVehicle



const cars: ICar = {

}