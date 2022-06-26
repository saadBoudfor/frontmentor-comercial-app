import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count!: number;
  showMenu = false;
  showCart = false;

  constructor(private carService: CartService) {
  }

  ngOnInit(): void {
    this.carService.getCart().subscribe(items => {
      this.count = getCount(items.purchases);
      console.log('count: ', this.count);
    })
  }

}

function getCount(purchases: { product: Product, quantity: number }[]) {
  let count = 0;
  for (let purchase of purchases) {
    count += purchase.quantity;
  }
  return count;
}
