import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductImage} from "../../models/ProductImage";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input()
  images!: ProductImage[];

  selected!: ProductImage;

  @Output()
  close = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.selected = this.images[0];
  }

  selectImage(productImage: ProductImage) {
    this.selected = productImage;
    this.images.forEach(image => image.selected = false);
    this.selected.selected = true;
  }

  next() {
    let selectedIndex = this.images.indexOf(this.selected);
    if (selectedIndex == this.images.length - 1) {
      selectedIndex = 0;
    } else {
      selectedIndex++;
    }
    this.selectImage(this.images[selectedIndex]);
  }

  previous() {
    let selectedIndex = this.images.indexOf(this.selected);
    if (selectedIndex == 0) {
      selectedIndex = this.images.length - 1;
    } else {
      selectedIndex--;
    }
    this.selectImage(this.images[selectedIndex]);
  }

  onClick($event: MouseEvent) {
    if($event.target) {
      const className = ($event.target as HTMLElement).className;
      if(className.indexOf('component-container') != -1) {
        this.close.emit();
      }
    }
  }
}

