const express = require("express")
const { Router } = express

const router = Router()

const listProducts = require("../listProducts")

//router.use("/products", productsRouter)

router.get("/productos", (req, res) => {    
    res.send(listProducts.list())
})

router.post("/productos", (req, res) => {    
    const newProducto = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    }
    res.send(listProducts.add(newProducto.name, newProducto.price, newProducto.image))
})

router.get("/productos/:id", (req, res) => {
    const {id} = req.params
    res.send(listProducts.findOne(parseInt(id)))    
})

router.put("/productos/:id", (req, res) => {
    const { id } = req.params   
    const newProducto = {
        id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
        }
    res.send(listProducts.update(id, newProducto.name, newProducto.price, newProducto.image))    
})

router.delete("/productos/:id", (req, res) => {
    const { id } = req.params   
    res.send(listProducts.remove(id))
})


module.exports = router