import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup
  productId: number = -1
  product: Product
  constructor(public formBuilder: FormBuilder, public productService: ProductService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //Retreiveing the product id from the url
    this.productId = this.activatedRoute.snapshot.params['productId']

    if (this.productId == -1) {
      //save func
      this.productForm = this.formBuilder.group({
        productId: ['', Validators.required],
        productName: ['', [Validators.required, Validators.minLength(5)]],
        quantityOnHand: ['', Validators.required],
        price: ['', Validators.required],
      })
    }
    else {
      //edit func
      this.productService.getProduct(this.productId)
        .subscribe(data => {
          this.product = data;
          this.productForm = this.formBuilder.group({
            productId: [this.product.productId, Validators.required],
            productName: [this.product.productName, [Validators.required, Validators.minLength(5)]],
            quantityOnHand: [this.product.quantityOnHand, Validators.required],
            price: [this.product.price, Validators.required],
          })

        }, error => console.log(error))
    }

  }

  saveProduct() {
    if (this.productId == -1) {
      //add product
      this.productService.addProduct(this.productForm.value)
        .subscribe(response => {
          console.log(response);
          // this.router.navigate(['productList'])
        },
          err => {
            this.router.navigate(['productList'])
          })
    }
    else
    {
       //edit product
       this.productService.updateProduct(this.productForm.value)
       .subscribe(response => {
         console.log(response);
         // this.router.navigate(['productList'])
       },
         err => {
           this.router.navigate(['productList'])
         })
    }
  }

}
