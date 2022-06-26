import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  purchases!: { product: Product, quantity: number }[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => this.purchases = data.purchases);
  }


  delete(productId: number) {
    this.cartService.removeProduct(productId);
  }

}
