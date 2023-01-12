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