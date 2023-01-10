"use strict";
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    addDamage(s) {
        this.damages.push(s);
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
_Vehicle_price = new WeakMap();
class EuroTrack extends Vehicle {
    setRun(k) {
        this.run = k / 0.2;
    }
}
new Vehicle();
