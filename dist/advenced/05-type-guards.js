"use strict";
function isFish(pet) {
    return pet.swim !== undefined; // Внутри могут быть самые разные проверки
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
