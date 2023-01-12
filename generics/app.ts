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