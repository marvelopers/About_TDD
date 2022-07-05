const ProductClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new ProductClient(); //의존성 주입 원칙에 위배
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
