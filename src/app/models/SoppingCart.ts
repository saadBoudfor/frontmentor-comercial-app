import {Product} from "./Product";

export class SoppingCart {
  purchases: {product: Product, quantity: number}[] = [];
}
