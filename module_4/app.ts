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

// Interface or Types+++
interface User {
    name: string
}

interface User {
    age: number
}

type ID = string | number

interface IDI {
    ID: string | number
}

interface User2 {
    login: string,
    password?: string
}

const user2: User2 = {
    login: 'asdfa@gmail.com',
    password: 'asdsad'
}

function multiply(a: number, b?: number): number {
    if (!b) {
        return a * a;
    } else {
        return a * b
    }
}

console.log(multiply(123, 2))

// Optional in typescript
interface UserPro {
    login: string,
    pass?: {
        type: 'primart' | 'secondary'
    }
}

function testPass(user: UserPro) {
    const t = user.pass?.type
}

// Test 4
enum StatusCodeTest {
    SUCCESS = 'success',
    FAILED = 'failed'
}

enum ErrorCode {
    success,
    failed,
    notFound
}

interface DataSuccess {
    status: StatusCodeTest | string,
    data?: {
        databaseId: number,
        sum: number,
        from: number,
        to: number
    }
}


interface DataFailed {
    status: StatusCodeTest | string,
    data?: {
        errorMessage: string,
        errorCode: ErrorCode | number
    }
}

interface TotalDataRequest {
    status: StatusCodeTest,
    data: DataSuccess | DataFailed
}

async function getData(req: { sum: number, from: number, to: number }, method: httpMethod): Promise<TotalDataRequest> {
    const res = await fetch('/dasd', {
        method: method,
        body: JSON.stringify(req)
    })

    const data = await res.json()

    return data
}
