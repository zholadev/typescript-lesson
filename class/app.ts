class User {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const userD = new User('Zholaman')

console.log(userD)
userD.name = 'Zsadasd'
console.log(userD)

class Admin {
    role: number

    constructor(role: number) {
        this.role = role
    }
}

const admin = new Admin(1)
admin.role = 1