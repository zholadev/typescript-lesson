type PaymentStatuss = 'new' | 'payed'

class Paymeent {
    id: number;
    status: PaymentStatuss = 'new';

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'payed'
    }
}

class PersistedPayment extends Paymeent {
    databaseId: number;
    paidAt: Date;


    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // saved database
    }

    pay(date?: Date) {
        super.pay()

        if (date) {
            this.paidAt = new Date()
        }
    }
}