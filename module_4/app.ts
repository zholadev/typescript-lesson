// Union in typescript

const unionArray1 = ['sadfas', 12323];

function getLog(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

getLog(1)
getLog('asdas')
getLog(true)

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err)
    }
}

logError('is not defined')
logError(['is', 'no', 'defined'])

function logObj(obj: { a: number } | { b: number | string }) {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {

    } else {
        console.log(a)
    }
}

// Literal Types

enum RequestType {
    GET = 'get',
    POST = 'post'
}


function fetchWithAuth(url: string, method: 'post' | 'get') {

}

let ter: 'sadasd' = 'sadasd'

ter = 'sadasd'

let method = 'post'

fetchWithAuth('s', method as 'post')