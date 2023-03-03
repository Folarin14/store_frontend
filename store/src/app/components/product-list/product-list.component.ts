import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from './../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  productAmount: number = 1
 
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.loadDataFunction()

  }

  changeQuantity(product: Product, quantity: string | undefined) {
    this.productService.changeQuantityFunction(product, quantity)

  }

  addToCart(product: Product) {
    this.productService.addToCartFunction(product)
  }

}
