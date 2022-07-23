import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService, Product } from 'src/app/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products!: any[];
  totalPrice = 0;
  fullName = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice += this.products[i].quantity * this.products[i].price;
    }
    this.productsService.totalPrice = this.totalPrice;
  }

  getProducts() {
    this.products = this.productsService.getCartedProducts();
  }

  changeAmount(product: any, qunatity: number) {
    this.totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice += this.products[i].quantity * this.products[i].price;
    }
    this.productsService.totalPrice = this.totalPrice;
    if (qunatity == 0) {
      this.products = this.productsService.removeFromCart(product.id);
      this.totalPrice = this.totalPrice - product.quantity * product.price;
      alert('A product has been removed from the cart');
    }
  }

  removeFromCart(product: any) {
    this.products = this.productsService.removeFromCart(product.id);
    this.totalPrice = this.totalPrice - product.quantity * product.price;
    if (this.products.length == 0) this.totalPrice = 0;
    alert('An product has been removed from the cart');
  }

  onSubmit(formData: NgForm) {
    if (formData.valid == true) {
      this.router.navigate(['/confirmation']);
      this.productsService.fullName = this.fullName;
    }
  }
}
