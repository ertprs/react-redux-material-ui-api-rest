const PRODUCTS = "_PRODUCTS"


export function ErrorValidade(errors) {
  this.errors = errors;
}

export default class ProductService {

  validade = (product) => {
    const errors = [];

    if (!product.name) {
      errors.push("the name field is requered!");
    }
    if (!product.sku) {
      errors.push("the sku fild is requered")
    } if (!product.price || (product.price <= 0)) {
      errors.push("the price fild is invalid")
    } if (!product.provider) {
      errors.push("the provider fild is requered!")
    }
    console.log("lista de erros: "+errors);
    if (errors.length > 0) {
      throw new ErrorValidade(errors)
    }

  }

  salve = (product) => {

    this.validade(product)

    let products = localStorage.getItem(PRODUCTS)

    if (!products) {
      products = []
    } else {
      products = JSON.parse(products)
    }

    products.push(product)
    localStorage.setItem(PRODUCTS, JSON.stringify(products))
  }

  getProducts = () =>{ 
    const get = localStorage.getItem(PRODUCTS)
    console.log("get: "+ get)

   return JSON.parse(get)
  }
}