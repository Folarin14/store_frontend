import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json'
import Product from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProduct: Product | undefined
  productsInCart: Product[] = []
  totalPriceOfCart: number = 0
  
  constructor() { }

  loadDataFunction() {
    return (data as any).default
  }

  changeQuantityFunction(product: Product, quantity: string | undefined){
    if (quantity) {
      product.quantity = parseInt(quantity)
      product.total = parseFloat((product.price * product.quantity).toFixed(2))
      this.totalPriceOfCart = this.totalPriceOfCart + product.total
      console.log(product)
    }
    else {
      console.log(`Quantity of product with id ${product.id} is undefined`)
    }
  }


  addToCartFunction(product: Product) {
    console.log(product, "added to cart")
    alert("Product added to Cart")
    this.productsInCart.push(product)
    console.log(this.productsInCart)
  }

}
