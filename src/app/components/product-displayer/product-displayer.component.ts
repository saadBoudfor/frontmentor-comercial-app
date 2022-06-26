import {Component, Inject, OnInit} from '@angular/core';
import {ProductImage} from "../../models/ProductImage";

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.scss']
})
export class ProductDisplayerComponent implements OnInit {

  images = PRODUCT_IMAGES;
  selected = PRODUCT_IMAGES[0];
  displayCarousel: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    let selectedIndex  = this.images.indexOf(this.selected);
    if(selectedIndex == this.images.length - 1 ) {
      selectedIndex = 0;
    }else {
      selectedIndex++;
    }
    this.selectImage(this.images[selectedIndex]);
  }

  previous() {
    let selectedIndex  = this.images.indexOf(this.selected);
    if(selectedIndex == 0) {
      selectedIndex = this.images.length - 1;
    }else {
      selectedIndex--;
    }
    this.selectImage(this.images[selectedIndex]);
  }

  selectImage(productImage: ProductImage) {
    this.images.forEach(image => image.selected = false);
    this.selected = productImage;
    productImage.selected = true;
  }
}

const PRODUCT_IMAGES: ProductImage[] = [
  {image: 'image-product-1.jpg', thumbnail: 'image-product-1-thumbnail.jpg', selected: true},
  {image: 'image-product-2.jpg', thumbnail: 'image-product-2-thumbnail.jpg', selected: false},
  {image: 'image-product-3.jpg', thumbnail: 'image-product-3-thumbnail.jpg', selected: false},
  {image: 'image-product-4.jpg', thumbnail: 'image-product-4-thumbnail.jpg', selected: false}
]


