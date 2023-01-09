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
