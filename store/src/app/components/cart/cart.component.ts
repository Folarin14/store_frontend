import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import Product from 'src/app/models/products';
import User from 'src/app/models/users'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[] = []
  totalPriceOfCart: string = ''

  constructor(private productService: ProductsService, private userService: UserService) {}
  ngOnInit(): void {
    this.productsInCart = this.productService.productsInCart
    this.totalPriceOfCart = this.productService.totalPriceOfCart.toString()
    console.log("Products in Cart are: ", this.productsInCart)
  }


  updateProductQuantityInCart(product:Product, quantity: string | undefined):void {
    this.productService.changeQuantityFunction(product, quantity)

    //product should already be updated, now update cart
    for (let prod of this.productsInCart) {

      // checks if product in cart is the same as updated product
      if (prod.id === product.id) {
        prod.quantity = product.quantity
      }
    }
    
    // remove item from cart if Amount is 0
    if (quantity === '0') {
      this.productsInCart = this.productsInCart.filter(prod => prod.id !== product.id)

    }
    console.log('Updated Product Quantity in Cart: ', this.productsInCart)
  }

  updatePriceOfCart(productCart: Product[]) {
    // extract totals of each product as an array
    const priceList = productCart.map(prod => prod.total!) 

    //total price of cart
    this.totalPriceOfCart = Math.round((priceList.reduce((a, b) => a + b, 0)) * 100 / 100).toFixed(2)

  }

}
