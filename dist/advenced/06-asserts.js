"use strict";
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error('User don\'t have a display NAME!');
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toLowerCase());
}
