class Undemy {
    private date: Date = new Date()

    getDate(this: Undemy) {
        return this.date
    }

    getDateArr = () => {
        return this.date
    }
}

const p = new Undemy()

const usersds = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArr: p.getDateArr
}

console.log(usersds.paymentDate())
console.log(usersds.paymentDateArr())

class PaymentPersistant extends Undemy {
    save() {
        return this.getDateArr()
    }
}

console.log(new PaymentPersistant().save())


class UserBuilder {
    name: string

    setName(name: string): this {
        this.name = name

        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[]
}

const builder = new UserBuilder().setName('Zholaman')
const adminBuilder = new AdminBuilder().setName('zhola')

console.log(builder)
console.log(adminBuilder)

let uses: UserBuilder | AdminBuilder = new UserBuilder()

if (uses.isAdmin()) {
    console.log(uses)
} else {
    console.log(uses)
}
