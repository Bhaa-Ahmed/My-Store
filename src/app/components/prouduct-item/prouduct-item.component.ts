import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService, Product } from 'src/app/products.service';

@Component({
  selector: 'app-prouduct-item',
  templateUrl: './prouduct-item.component.html',
  styleUrls: ['./prouduct-item.component.css'],
})
export class ProuductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() alertMsg = new EventEmitter();
  alertMessage = 'A product has been added to cart';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  alert() {
    this.alertMsg.emit(this.alertMessage);
  }

  onSubmit(formData: NgForm) {
    let newObj = { ...this.product, quantity: +formData.value.quantity };
    this.productsService.addProductToCart(newObj);
  }
}
