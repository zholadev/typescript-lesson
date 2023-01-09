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
// Type Aliases

type  httpMethod = 'post' | 'get' | 'put' | 'update'

enum RequestType {
    GET = 'get',
    POST = 'post'
}


function fetchWithAuth(url: string, method: httpMethod) {
    console.log(url, method)
}

let ter: 'sadasd' = 'sadasd'

ter = 'sadasd'

let method = 'post'

fetchWithAuth('s', method as 'post')

// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// type Role = {
//     id: number
// }

// type UserWithRoles = {
//     user: User,
//     role: Role
// }

interface User {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
}

interface Roles {
    userId: number
}

interface UserWithRoles extends User, Roles {
    createdAt: Date
}

const userObj: UserWithRoles = {
    name: 'asdfasdf',
    age: 33,
    skills: ['asda', 'asdas'],
    userId: 12,
    createdAt: new Date(),

    log(id) {
        return ''
    }
}

interface UserDictionary {
    [index: number]: User
}