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
