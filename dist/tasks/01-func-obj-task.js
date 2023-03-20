"use strict";
function login(user) {
    if (user.login && user.password) {
        console.log('Greeting mr.' + user.login);
    }
}
const mtObj = {
    login: 'Egor',
    password: 'FGgsdgsdggsdg'
};
login(mtObj);
