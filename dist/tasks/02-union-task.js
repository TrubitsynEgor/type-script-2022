"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeDeveloper = void 0;
const developer = {
    login: 'Rgsdgsd',
    skills: ['Js', 'html', 'scss', 'react', 'redux', 'typescript'],
    level: 'Jun'
};
function gradeDeveloper(developer) {
    if (developer.level === 'Jun') {
        console.log(`Congraz! ${developer.login} Now you are middle developer! `);
        return Object.assign(Object.assign({}, developer), { level: 'middle' });
    }
    if (developer.level === 'middle') {
        console.log(`Congraz! ${developer.login} Now you are senior developer! `);
        return Object.assign(Object.assign({}, developer), { level: 'senior' });
    }
}
exports.gradeDeveloper = gradeDeveloper;
;
const gradeDev = gradeDeveloper(developer);
console.log(gradeDev);
