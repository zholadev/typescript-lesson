"use strict";
// Union in typescript
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
// Literal Types
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
}
let ter = 'sadasd';
ter = 'sadasd';
let method = 'post';
fetchWithAuth('s', method);
