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
//# sourceMappingURL=app.js.map