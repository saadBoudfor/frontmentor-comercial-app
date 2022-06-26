import {EventEmitter, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Output()
  close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickToClose($event: MouseEvent) {
    if($event.target) {
      const className = ($event.target as HTMLElement).className;
      if(className.indexOf('component-container') != -1) {
        this.close.emit();
      }
    }
  }

}
