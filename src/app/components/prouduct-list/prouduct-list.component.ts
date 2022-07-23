import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService, Product } from 'src/app/products.service';

@Component({
  selector: 'app-prouduct-list',
  templateUrl: './prouduct-list.component.html',
  styleUrls: ['./prouduct-list.component.css'],
})
export class ProuductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  alert(msg: any) {
    alert(msg);
  }
}
