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