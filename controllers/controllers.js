const listProducts = require("../listProducts")

class Product {
  static getAll() {
    const products = listProducts.list()
    return products
  }

  static create(name, price, image) {
    const product = listProducts.add(name, price, image)
    return product
  }
}

module.exports = Product