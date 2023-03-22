"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Todo  - infer:
// Позваляет нам объявить переменную в пределах нашего ограничения типов на которую можно ссылаться или return
// использ может только в условных типах после ключ слова extends
function fromPair(pair) {
    const [key, value] = pair;
    return {
        [key]: value
    };
}
const myPair = ['myKey', 'myValue'];
fromPair(myPair);
