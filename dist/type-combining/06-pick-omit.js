"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Если мы создадим obj и присвоим ему тип BrandNames:
const obj43 = {
//* Мы  по подсказке тут получим 'apple' | 'lenovo' | 'hp' | 'microsoft' | 'huawei'
// Ключи в нашем объекте могут быть только вышеописанные в WellKnownBrands
};
// Теперь мы можем спокойно задать указанные значения в obj todo, и нам не обязательно перечислять все типы interface Todo
const todo = {
    id: '1',
    title: "Clean room",
    completed: false,
};
// То есть дай мне все типы из interface Todo, кроме!  'id' | "title" | "completed"
/* type TodoPreview2 = {
    description: string;
    createAt: number;
} */ 
