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

  static findOne(id) {
    const product = listProducts.findOne(id)
    return product
  }

  static update(id, name, price, image) {
    const product = listProducts.update(id, name, price, image)
    return product
  }

  static delete(id) {
    const product = listProducts.remove(id)
    return product
  }
  
}

module.exports = Product