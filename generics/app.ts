const gen: Array<number> = [1, 2, 4]

async function test() {
    const a = new Promise<number>((resolve, reject) => {
        resolve(1)
    })
}

const check: Record<string, boolean> = {
    dive: true,
    kpp: false
}

function logMiddleware<T>(data: T): T {
    console.log(data)
    return data
}

const ressss = logMiddleware<string>('asdasd')

function splitHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2

    return data.splice(0, 1)
}

const split: <T>(data: Array<T>) => Array<T> = splitHalf

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

type ILogLineType<T> = {
    timeStamp: Date;
    data: T;
}

const logLine: ILogLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

class Vehicles {
    run: number

    constructor(run: number) {
        this.run = run
    }
}

function kmToMiles<T extends Vehicles>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62

    return vehicle
}

class LCV extends Vehicles {
    capacity: number
}

const vehicle = kmToMiles(new Vehicles(1212))
const lcv = kmToMiles(new LCV(1212))
kmToMiles({run: 123})

function logid<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
    return {
        id,
        data: additionalData
    }
}

const sortData = [
    {id: 1, name: 'asdas'},
    {id: 2, name: 'ujtyjh'},
    {id: 3, name: 'vadxc'}
]

interface IDS {
    id: number;
}

type sortType = 'asc' | 'desc'

function sort<T extends IDS>(data: T[], type: sortType = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}

console.log(sort(sortData, 'desc'))


class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data: D, error: E) {
        this.data = data;
        this.error = error
    }
}

const resss = new Resp<string, number>('asdsadasd', 0)

class HTTPRES<F> extends Resp<string, number>{
    code: F
    
    setCode(code: F) {
        this.code = code
    }
}

const res3 = new HTTPRES('asdasd', 121)
