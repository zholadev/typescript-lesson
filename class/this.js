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
