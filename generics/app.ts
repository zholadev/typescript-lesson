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