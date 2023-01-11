"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
    }
}
class HomeDelivery extends Delivery {
    constructor(date, addres) {
        super(date);
        this.addres = addres;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addToCart(product) {
        this.products.push(product);
    }
    deleteToCart(productId) {
        this.products = this.products.filter((item) => item.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error('not product in cart');
        }
        if (!this.delivery) {
            throw new Error('not delivery');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addToCart(new Product(1, 'titit', 12930));
cart.addToCart(new Product(2, 'tiasdtit', 2930));
cart.addToCart(new Product(3, 'chocolate', 42930));
cart.deleteToCart(1);
cart.setDelivery(new HomeDelivery(new Date(), 'asdasdas'));
console.log(cart);
console.log(cart.getSum());
//# sourceMappingURL=task.js.map