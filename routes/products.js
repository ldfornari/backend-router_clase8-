const express = require("express")
const Product = require("../controllers/controllers")
const productsRouter = express.Router()
const listProducts = require("../listProducts")

productsRouter.get("/api/products", (req, res) => {
  const products = Product.getAll()
  res.send(products)
})

productsRouter.get("/:id", (req, res) => {
  const {id} = req.params
  res.send(listProducts.findOne(parseInt(id)))
})

productsRouter.post("/", (req, res) => {
  const { name, price, image } = req.body
  const product = product.create(name, price, image)
  res.status(201).send(product)
})

module.exports = productsRouter