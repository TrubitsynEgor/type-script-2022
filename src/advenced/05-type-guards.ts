

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish { // Type guard функ защитник здесь мы проверяем является ли что то чем то 
	return (pet as Fish).swim !== undefined // Внутри могут быть самые разные проверки
}

function move(animal: Fish | Bird) {
	if (isFish(animal)) {
		return animal.swim();
	}
	return animal.fly()
}
