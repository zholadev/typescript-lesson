"use strict";
class Paymeent {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'payed';
    }
}
class PersistedPayment extends Paymeent {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = new Date();
        }
    }
}
class ClientS {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class AdminS extends ClientS {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new AdminS();
class ClientB {
    constructor(name) {
        this.name = name;
    }
}
class Clients extends Array {
    searchByName(name) {
        this.filter(user => user.name === name);
    }
    toString() {
        return this.map(user => user.name).join(', ');
    }
}
const userss = new Clients();
userss.push(new ClientB('ghost'));
userss.push(new ClientB('asdas'));
console.log(userss.toString());
class Kaz {
}
class Kaz2 {
    constructor(user, kaz) {
        this.kaz = kaz;
        this.user = user;
    }
}
//# sourceMappingURL=extends.js.map