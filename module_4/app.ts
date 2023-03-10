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
    data: {
        databaseId: number,
        sum: number,
        from: number,
        to: number
    }
}


interface DataFailed {
    data: {
        errorMessage: string,
        errorCode: ErrorCode.failed | number
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


// Void in typescript

function logVoid(id: string | number): void {
    console.log(id)
}

const as = logVoid(1)

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true
}

const bs = f2()

const userSkills = ['asdas', 'asdasd']

const userS = {
    s: ['']
}

userSkills.forEach((skill) => userS.s.push(skill))


// Unknown
let input: unknown

input = 3
input = 'zholadev'

// let resInput: string = input

function run(ins: unknown) {
    if (typeof ins === 'number') {
        ins++;
    } else {
        ins
    }
}

run(input)

async function getDataS() {
    try {
        await fetch('')
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
        }

        const e = err as Error;
        console.log(e)
    }
}

type f3 = unknown | string
type f4 = unknown & string

// Never
function generateError(message: string): never {
    throw new Error(message)
}

function dumpError(): never {
    while (true) {

    }
}

function rec1(): never {
    return rec1();
}

type paymentAction = 'refund' | 'checkout'

function processAction(action: paymentAction) {
    switch (action) {
        case "refund":
            // ...
            break
        case 'checkout':
            // ...
            break
        default:
            const _: never = action
            throw new Error('not found this type')
    }
}

function checkTypeToBoolean(x: string | number): boolean {
    if (typeof x === "string") {
        return true
    } else {
        return false
    }

    generateError('asdasd');
}

// Null in ts
const ull: null = null

interface UserDataS {
    name: string
}


let af = 5
let b: string = af.toString()

enum AdminRole {
    ADMIN,
    ORDINARY
}

interface UserS {
    name: string,
    email: string,
    login: string
}

const users: UserS = {
    name: 'asdfasdf',
    email: 'sadfasdf',
    login: 'dsafadsf'
}

interface Admin {
    name: string,
    role: number
}

function userToAmin(user: UserS): Admin {
    return {
        name: user.name,
        role: 1
    }
}

// Type Guard

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id)
    } else {
        console.log(id)
    }

    id
}

function isString(x: string | number): x is string {
    return typeof x === 'string'
}

function isAdmin(user: UserS | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: UserS | Admin): user is Admin {
    return (user as Admin).role !== undefined
}

function setRole(user: UserS | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('user is not admin')
    }
}

interface IResponseSuccess {
    status: StatusCodeTest.SUCCESS,
    data: DataSuccess
}

interface IResponseFailed {
    status: StatusCodeTest.FAILED,
    data: DataFailed
}

type t = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
    if (res.status === StatusCodeTest.SUCCESS) {
        return true
    }

    return false
}

function getIdFrom(res: Res): number {
    if (isSuccess(res)) {
        return res.data.data.databaseId
    } else {
        throw new Error(res.data.data?.errorMessage)
    }
}

// Asserts in Ts
interface AssertUser {
    name: string
}

const ag = {}
// assertUser(ag)
// ag.name = 'asdasd'
//
// function assertUser(user: unknown): asserts user is AssertUser {
//     if (typeof user === 'object' && !!user && 'name' in user) {
//         return;
//     }
//
//     throw new Error('user is not found')
// }

type Payment = number | {  sum: number  } | {call: string};

let payment: Payment = 20;
payment = {call: 'asdasd'}

console.log(payment)

const userName = 'zholadev'

console.log(userName)