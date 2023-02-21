import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json'
import Product from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProduct: Product | undefined
  productsInCart: Product[] = []
  
  constructor() { }

  loadDataFunction() {
    return (data as any).default
  }

  changeQuantityFunction(product: Product, quantity: string | undefined){
    if (quantity) {
      product.quantity = parseInt(quantity)
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
