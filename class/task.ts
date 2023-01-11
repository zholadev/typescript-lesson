class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {
    }
}

class Delivery {
    constructor(
        date: Date
    ) {
    }
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public addres: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

type getDelivery = HomeDelivery | ShopDelivery

class Cart {
    private products: Product[] = []
    private delivery: getDelivery

    addToCart(product: Product): void {
        this.products.push(product)
    }

    deleteToCart(productId: number): void {
        this.products = this.products.filter((item: Product) => item.id !== productId)
    }

    getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2)
    }

    setDelivery(delivery: getDelivery): void {
        this.delivery = delivery
    }

    checkout() {
        if (this.products.length === 0) {
            throw new Error('not product in cart')
        }

        if (!this.delivery) {
            throw new Error('not delivery')
        }

        return {success: true}
    }
}

const cart = new Cart()

cart.addToCart(new Product(1, 'titit', 12930))
cart.addToCart(new Product(2, 'tiasdtit', 2930))
cart.addToCart(new Product(3, 'chocolate', 42930))

cart.deleteToCart(1)

cart.setDelivery(new HomeDelivery(new Date(), 'asdasdas'))

console.log(cart)
console.log(cart.getSum())