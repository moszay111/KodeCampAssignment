 function Product(name, price) {
  const _name = name
  const _price = price

this.getName = () => _name;
this.getPrice = () => _price

 }

 function ShoppingCart() {
  const items = []

  this.addItem = (product) => {
    items.push(product)
  },

  this.removeItem = (product) => {
    const index = items.findIndex(item => item === product)
    if (index !== -1) {
      items.splice(index, 1)
    }
  },


 this.getTotal = () => {
  let total = 0
  items.forEach(items => {
    total += items.getPrice()
  })
  return total
 },

 this.getCartItems = () => {
  return items.map(item => {
    return {
      name: item.getName(),
      price: item.getPrice()
    }
  })
 }



 }

const product1 = new Product('bag', 10)
const product2 = new Product('shoe', 20)


const cart = new ShoppingCart()
cart.addItem(product1)
cart.addItem(product2)

 console.log(cart.getCartItems())
 console.log(cart.getTotal())

 cart.removeItem(product1)
 console.log(cart.getCartItems())
 console.log(cart.getTotal())