class Vehicle {
    public make: string
    private damages: string[]
    private _model: string
    protected run: number
    #price: string

    addDamage(s: string) {
        this.damages.push(s)
    }

    set model(model: string) {
        this._model = model
    }

    get model() {
        return this._model
    }
}

class EuroTrack extends Vehicle {
    setRun(k: number) {
       this.run = k / 0.2
    }
}

new Vehicle()