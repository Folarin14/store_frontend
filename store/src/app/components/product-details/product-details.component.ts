import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/products';

// import Product from 'src/app/models/products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productList: Product[] = []
  selectedID: string = ''
  selectedProduct: Product =  {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };
 

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
  }

  ngOnInit(): void {
    //retrive dynammic id and use it to render product

    this.route.params.subscribe(params => {
      this.selectedID = params['id']
      this.productList = this.productService.loadDataFunction()
      console.log(this.selectedID)
      this.selectedProduct = this.productList.filter(prod => prod.id === parseInt(this.selectedID))[0]
      console.log(this.selectedProduct)
    })

  }

  changeQuantity(product: Product, quantity: string | undefined) {
    this.productService.changeQuantityFunction(product, quantity)

  }

  addToCart(product:Product){
    this.productService.addToCartFunction(product)
  }
}
