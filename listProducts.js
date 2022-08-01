let data = []

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

const products = [
  { 
    id: 1, 
    name: 'Producto 1', 
    price: 100, 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 2, 
    name: 'Producto 2',
    price: 200, image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 3, 
    name: 'Producto 3', 
    price: 300, 
    image: 'https://via.placeholder.com/150' 
  } 
]