"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const userD = new User('Zholaman');
console.log(userD);
userD.name = 'Zsadasd';
console.log(userD);
class Admin {
    constructor(role) {
        this.role = role;
    }
}
const admin = new Admin(1);
admin.role = 1;
//# sourceMappingURL=app.js.map