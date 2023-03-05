import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json'
import Product from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProduct: Product | undefined
  productsInCart: Product[] = []
  totalPriceOfCart: string = ''
  
  constructor() { }

  loadDataFunction() {
    return (data as any).default
  }

  changeQuantityFunction(product: Product, quantity: string | undefined){
    if (quantity) {
      product.quantity = parseInt(quantity)
      product.total = parseFloat((product.price * product.quantity).toFixed(2))

      if (this.totalPriceOfCart === ''){
        this.totalPriceOfCart = this.totalPriceOfCart + product.total
      }
      else {
        this.totalPriceOfCart = (parseFloat(this.totalPriceOfCart) + product.total).toFixed(2)
      }
      console.log(product)
    }
    else {
      console.log(`Quantity of product with id ${product.id} is undefined`)
    }
  }


  addToCartFunction(product: Product) {
    console.log(product, "added to cart")

    const index = this.productsInCart.indexOf(product)

    if (index >= 0) {
      const selectedElement = this.productsInCart.filter(prod => prod.id === product.id)[0]
      console.log('Selected element: ', selectedElement)
      selectedElement.quantity = product.quantity
      selectedElement.total =  selectedElement.price * selectedElement.quantity!
      alert("Product already in cart; Quantity updated")

      // update the cart price on the frontend
      this.UpdateCartFunction(this.productsInCart)
    }

    else {
      this.productsInCart.push(product)
      alert("Product added to Cart")

    }
    
    console.log(this.productsInCart)
  }

  UpdateCartFunction(productCart: Product[]) {
      // extract totals of each product as an array
      const priceList = productCart.map(prod => prod.total!) 
      console.log('Update Price of Cart Function - Product Cart: ', productCart)
      console.log('Update Price of Cart Function - this.productinCart: ', this.productsInCart)
  
      //total price of cart
      console.log('Old Price -', this.totalPriceOfCart)
      this.totalPriceOfCart = (priceList.reduce((a, b) => a + b, 0)).toFixed(2)
      console.log('Updated Price -', this.totalPriceOfCart)
  }

}
