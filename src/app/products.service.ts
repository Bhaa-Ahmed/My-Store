import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsAddedToCart: Product[] = [];
  totalPrice = 0;
  fullName = '';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('../assets/data.json');
  }

  getCartedProducts() {
    return this.productsAddedToCart;
  }

  addProductToCart(product: Product) {
    this.productsAddedToCart.push(product);
  }

  removeFromCart(id: number) {
    return this.productsAddedToCart.filter((product) => product.id != id);
  }

  resetProducts() {
    this.productsAddedToCart = [];
  }
}
