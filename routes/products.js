const express = require("express")
const Product = require("../controllers/controllers")
const productsRouter = express.Router()
const listProducts = require("../listProducts")



const list = () => {
    data = listProducts.map((res) => {
     return res
  })
   return data
 }
 
 const findOne = (id) => {
   data = listProducts.filter((product) => product.id == id)
     if (id <= 0 || id > listProducts.length) return { error: 'Producto no encontrado' }
   return data
 }
 
 const add = (name, price, image) => {
     data = listProducts.map((res) => {
       return res
     })   
     data.push({ id: data.length + 1, name, price, image} )
     listProducts.push(data[data.length - 1])
   return data
 }
 
 const remove = (id) => {
     if (id <= 0 || id > listProducts.length) return { error: 'Producto no encontrado' }  
     data = listProducts.splice(id -1, 1)  
   return data
  }
 
 const update = (id, name, price, image) => {
     if (id <= 0 || id > listProducts.length) return { error: 'Producto no encontrado' }
     data = products.splice(id -1, 1 ,{ id, name, price, image })
   return data
 }
 
 module.exports = { add, list, findOne, remove, update }

// productsRouter.get("/api/products", (req, res) => {
//   const products = Product.getAll()
//   res.send(products)
// })

// productsRouter.get("/:id", (req, res) => {
//   const {id} = req.params
//   res.send(listProducts.findOne(parseInt(id)))
// })

// productsRouter.post("/", (req, res) => {
//   const { name, price, image } = req.body
//   const product = product.create(name, price, image)
//   res.status(201).send(product)
// })

// module.exports = productsRouter