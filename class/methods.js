"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class PaymentC {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('payment not returned');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const paymentS = new PaymentC(1);
paymentS.unholdPayment();
const time = paymentS.getPaymentLifeTime();
console.log(paymentS, time);
//# sourceMappingURL=methods.js.map