import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {
    id: 7,
    brand: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion.' +
      ' Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125,
    discount: '50%',
    oldPrice: '$250.00'
  }

  quantity = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      console.log('cart state: ', {purchases: cart.purchases});
    })
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0)
      this.quantity--;
  }

  onSubmit() {
    if (this.quantity === 0) this.quantity = 1;
    this.cartService.addProduct(this.product, this.quantity);
  }
}
