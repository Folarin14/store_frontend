import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[] = []

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productsInCart = this.productService.productsInCart
    console.log("Products in Cart are: ", this.productsInCart)
  }


}
