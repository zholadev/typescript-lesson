interface ILogger {
    log(...args: any[]): void;

    error(...args: any[]): void;
}

class Logger implements ILogger {
    async error(...args: any[]): Promise<void> {
        console.log(...args)
    }

    log(...args: any[]): void {
        console.log(...args)
    }
}

interface IPayable {
    pay(paymentId: number): void;

    price: number
}

interface IDeletable {
    delete(): void;
}

class UserLogger implements IPayable, IDeletable {
    pay(paymentId: number | string): void {
        ///
    }

    price: number;

    delete(): void {
    }
}