"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
function login(user) {
    if (user.login && user.password) {
        console.log('Greeting mr.' + user.login);
    }
}
exports.login = login;
const mtObj = {
    login: 'Egor',
    password: 'FGgsdgsdggsdg'
};
login(mtObj);
