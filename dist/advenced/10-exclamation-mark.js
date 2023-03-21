"use strict";
let word = null;
const numbrs = 10;
if (numbrs > 5) {
    word = 'abc';
}
console.log(word.toLowerCase());
function printName(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const persons = [
    {
        name: 'Egor',
        age: 33,
        sex: 'male'
    },
    {
        name: 'Sveta',
        age: 36,
        sex: 'female'
    },
    {
        name: 'Vania',
        age: 21,
        sex: 'male'
    },
    {
        name: 'Olga',
        age: 36,
        sex: 'famale'
    },
    {
        name: 'Sergey',
        age: 31,
        sex: 'male'
    },
];
const femalePeople = persons.find(el => el.sex === 'female');
// Может быть полезно в некоторых кейсах! Вроде встречаем опред гибкость когда мы уверенны в некоторых значениях на 100%
// Но код все время меняется и там где должны были быть данные потом их может не оказатся!
//! В деплой версии приложения не преветствуется использование '!'
//* Потому лучше использовать type guard or asserts или условия для того чтобы убедится в наличии значения
