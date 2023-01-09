"use strict";
// Union in typescript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const unionArray1 = ['sadfas', 12323];
function getLog(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
getLog(1);
getLog('asdas');
getLog(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
logError('is not defined');
logError(['is', 'no', 'defined']);
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
    console.log(url, method);
}
let ter = 'sadasd';
ter = 'sadasd';
let method = 'post';
fetchWithAuth('s', method);
const userObj = {
    name: 'asdfasdf',
    age: 33,
    skills: ['asda', 'asdas'],
    userId: 12,
    createdAt: new Date(),
    log(id) {
        return '';
    }
};
const user2 = {
    login: 'asdfa@gmail.com',
    password: 'asdsad'
};
function multiply(a, b) {
    if (!b) {
        return a * a;
    }
    else {
        return a * b;
    }
}
console.log(multiply(123, 2));
function testPass(user) {
    var _a;
    const t = (_a = user.pass) === null || _a === void 0 ? void 0 : _a.type;
}
// Test 4
var StatusCodeTest;
(function (StatusCodeTest) {
    StatusCodeTest["SUCCESS"] = "success";
    StatusCodeTest["FAILED"] = "failed";
})(StatusCodeTest || (StatusCodeTest = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["success"] = 0] = "success";
    ErrorCode[ErrorCode["failed"] = 1] = "failed";
    ErrorCode[ErrorCode["notFound"] = 2] = "notFound";
})(ErrorCode || (ErrorCode = {}));
function getData(req, method) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/dasd', {
            method: method,
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
// Void in typescript
function logVoid(id) {
    console.log(id);
}
const as = logVoid(1);
const f1 = () => {
};
const f2 = () => {
    return true;
};
const bs = f2();
const userSkills = ['asdas', 'asdasd'];
const userS = {
    s: ['']
};
userSkills.forEach((skill) => userS.s.push(skill));
// Unknown
let input;
input = 3;
input = 'zholadev';
// let resInput: string = input
function run(ins) {
    if (typeof ins === 'number') {
        ins++;
    }
    else {
        ins;
    }
}
run(input);
function getDataS() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
            const e = err;
            console.log(e);
        }
    });
}
// Never
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) {
    }
}
function rec1() {
    return rec1();
}
function processAction(action) {
    switch (action) {
        case "refund":
            // ...
            break;
        case 'checkout':
            // ...
            break;
        default:
            const _ = action;
            throw new Error('not found this type');
    }
}
function checkTypeToBoolean(x) {
    if (typeof x === "string") {
        return true;
    }
    else {
        return false;
    }
    generateError('asdasd');
}
// Null in ts
const ull = null;
let af = 5;
let b = af.toString();
var AdminRole;
(function (AdminRole) {
    AdminRole[AdminRole["ADMIN"] = 0] = "ADMIN";
    AdminRole[AdminRole["ORDINARY"] = 1] = "ORDINARY";
})(AdminRole || (AdminRole = {}));
const users = {
    name: 'asdfasdf',
    email: 'sadfasdf',
    login: 'dsafadsf'
};
function userToAmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
// Type Guard
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
    id;
}
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('user is not admin');
    }
}
function isSuccess(res) {
    if (res.status === StatusCodeTest.SUCCESS) {
        return true;
    }
    return false;
}
function getIdFrom(res) {
    var _a;
    if (isSuccess(res)) {
        return res.data.data.databaseId;
    }
    else {
        throw new Error((_a = res.data.data) === null || _a === void 0 ? void 0 : _a.errorMessage);
    }
}
const ag = {};
let payment = 20;
payment = { call: 'asdasd' };
console.log(payment);
const userName = 'zholadev';
console.log(userName);
