import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  totalPrice: number = 0;
  fullName: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalPrice = this.productsService.totalPrice;
    this.fullName = this.productsService.fullName;
  }

  resetProducts() {
    this.productsService.resetProducts();
    this.router.navigate(['/product-list']);
    this.productsService.totalPrice = 0;
    this.productsService.fullName = '';
  }
}
