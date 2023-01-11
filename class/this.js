"use strict";
class Undemy {
    constructor() {
        this.date = new Date();
        this.getDateArr = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Undemy();
const usersds = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArr: p.getDateArr
};
console.log(usersds.paymentDate());
console.log(usersds.paymentDateArr());
class PaymentPersistant extends Undemy {
    save() {
        return this.getDateArr();
    }
}
console.log(new PaymentPersistant().save());
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const builder = new UserBuilder().setName('Zholaman');
const adminBuilder = new AdminBuilder().setName('zhola');
console.log(builder);
console.log(adminBuilder);
let uses = new UserBuilder();
if (uses.isAdmin()) {
    console.log(uses);
}
else {
    console.log(uses);
}
