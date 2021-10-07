import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from '../data/ProductData';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products !: Product[]
  errorMessage !: string;
  successMessage !: string;

  date = new Date();
  
  constructor(public productService: ProductService,public activatedRoute:ActivatedRoute,public router:Router) {
  }
  ngOnInit(): void {
    this.refreshProducts();
  }
  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId)
      .subscribe(response => {
        console.log(response);
        this.successMessage = "Product Id : " + productId + " , deleted successfully";
        this.refreshProducts();
      },
        err => {
          this.errorMessage = err
        })
  }

  editProduct(productId:number)
  {
      this.router.navigate(['addProduct',productId])
  }

  refreshProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data
    }, err => this.errorMessage = err)
  }


  addProduct(){
    //programmatic navigation 
    this.router.navigate(['addProduct', "-1"])
  }
}
