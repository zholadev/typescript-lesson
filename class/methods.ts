enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class PaymentC {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt: Date | undefined;

    constructor(id: number) {
        this.id = id
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('payment not returned')
        }

        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }

}

const paymentS = new PaymentC(1)
paymentS.unholdPayment()
const time = paymentS.getPaymentLifeTime()
console.log(paymentS, time)