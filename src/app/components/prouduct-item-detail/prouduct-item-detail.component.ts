import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prouduct-item-detail',
  templateUrl: './prouduct-item-detail.component.html',
  styleUrls: ['./prouduct-item-detail.component.css'],
})
export class ProuductItemDetailComponent implements OnInit {
  id!: number;
  product: any = {};

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });

    this.getProduct();
  }

  getProduct() {
    this.productsService.getProducts().subscribe((data) => {
      let newData = [];
      newData = data.filter((product: Product) => {
        return product.id == this.id;
      });
      this.product = newData[0];
    });
  }

  onSubmit(formData: NgForm) {
    let newObj = { ...this.product, quantity: +formData.value.quantity };
    this.productsService.addProductToCart(newObj);
  }

  alert() {
    alert('A product has been added to cart');
  }
}
