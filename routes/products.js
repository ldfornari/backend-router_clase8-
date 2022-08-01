const express = require("express")
const Product = require("../controllers/product.controllers")
const productsRouter = express.Router()
const listProducts = require("../listProducts")

productsRouter.get("/productos", (req, res) => {  
    console.log("get /productos")
    const products = Product.getAll()  
    res.send(products)
})

productsRouter.post("/productos", (req, res) => {    
    const product = Product.create(req.body.name, req.body.price, req.body.image)
    console.log("en metodo post")
    res.send(product)

    // const newProduct = {
    //     name: req.body.name,
    //     price: req.body.price,
    //     image: req.body.image
    // }
    // const product = Product.create(newProduct.name, newProduct.price, newProduct.image)
    // res.send(product)
})

productsRouter.get("/productos/:id", (req, res) => {
    const {id} = req.params
   // const product = Product.findOne(id)
    res.send(listProducts.findOne(id)) 
})

productsRouter.put("/productos/:id", (req, res) => {
    const { id } = req.params   
    const product = Product.update(id, req.body.name, req.body.price, req.body.image)
    res.send(product)
    // const newProducto = {
    //     id,
    //     name: req.body.name,
    //     price: req.body.price,
    //     image: req.body.image
    //     }
    // res.send(listProducts.update(id, newProducto.name, newProducto.price, newProducto.image))    
})

productsRouter.delete("/productos/:id", (req, res) => {
    const { id } = req.params   
    const product = Product.delete(id)
    res.send(product)

    // res.send(listProducts.remove(id))
})



// productsproductsRouter.get("/api/products", (req, res) => {
//   const products = Product.getAll()
//   res.send(products)
// })

// productsproductsRouter.get("/:id", (req, res) => {
//   const {id} = req.params
//   res.send(listProducts.findOne(parseInt(id)))
// })

// productsRouter.post("/", (req, res) => {
//   const { name, price, image } = req.body
//   const product = product.create(name, price, image)
//   res.status(201).send(product)
// })

module.exports = productsRouter