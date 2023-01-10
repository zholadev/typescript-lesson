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

class ClientS {
    name: string = 'user'

    constructor() {
        // this.name = name
        console.log(this.name)
    }
}

class AdminS extends ClientS {
    name: string = 'admin'

    constructor() {
        super();
        console.log(this.name)
    }

}

new AdminS()

class ClientB {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class Clients extends Array<ClientB> {
    searchByName(name: string) {
        this.filter(user => user.name === name)
    }

    toString(): string {
        return this.map(user => user.name).join(', ')
    }
}

const userss = new Clients()
userss.push(new ClientB('ghost'))
userss.push(new ClientB('asdas'))

console.log(userss.toString())

class Kaz {
    date: Date;
}

class Kaz2 {
    user: ClientB;
    kaz: Kaz

    constructor(user: ClientB, kaz: Kaz) {
        this.kaz = kaz
        this.user = user
    }
}

// const tot = new Kaz2('Shaman', new Date())