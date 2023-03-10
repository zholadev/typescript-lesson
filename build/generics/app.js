"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const gen = [1, 2, 4];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
const check = {
    dive: true,
    kpp: false
};
function logMiddleware(data) {
    console.log(data);
    return data;
}
const ressss = logMiddleware('asdasd');
function splitHalf(data) {
    const l = data.length / 2;
    return data.splice(0, 1);
}
const split = splitHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
class Vehicles {
    constructor(run) {
        this.run = run;
    }
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicles {
}
const vehicle = kmToMiles(new Vehicles(1212));
const lcv = kmToMiles(new LCV(1212));
kmToMiles({ run: 123 });
function logid(id, additionalData) {
    return {
        id,
        data: additionalData
    };
}
const sortData = [
    { id: 1, name: 'asdas' },
    { id: 2, name: 'ujtyjh' },
    { id: 3, name: 'vadxc' }
];
function sort(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
}
console.log(sort(sortData));
//# sourceMappingURL=app.js.map