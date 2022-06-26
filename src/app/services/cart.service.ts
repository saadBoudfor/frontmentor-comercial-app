import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SoppingCart} from "../models/SoppingCart";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartObserver = new BehaviorSubject<SoppingCart>({purchases: []})

  constructor() {
  }

  clear() {
    this.cartObserver.next({purchases: []})
  }

  getCart() {
    return this.cartObserver.asObservable();
  }

  removeProduct(productId: number) {
    const old = this.cartObserver.value.purchases;
    this.cartObserver.next({purchases: old.filter(item => item.product.id !== productId)});
  }

  addProduct(product: Product, quantity: number) {
    const purchases = this.cartObserver.value.purchases;
    if (purchases.length == 0) {
      this.cartObserver.next({purchases: [{product: product, quantity: quantity}]})
      return;
    }
    // if product already added to cart
    const found = purchases.filter(item => item.product.id === product.id);
    if (found.length !== 0) {
      found[0].quantity += quantity;
    } else {
      // else add new product to cart
      purchases.push({product: product, quantity: quantity});
    }
    this.cartObserver.next({purchases});
  }
}
