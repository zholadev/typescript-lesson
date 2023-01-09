class UserConstructor {
    name: string | undefined
    age: number | undefined

    constructor();
    constructor(age: number)
    constructor(name: string)
    constructor(ageOrName?: string | number) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName
        }
    }
}

const userConstr = new UserConstructor('Zholaman')
const userConstr2 = new UserConstructor()
const userConstr3 = new UserConstructor(14)

console.log(userConstr, userConstr2, userConstr3)