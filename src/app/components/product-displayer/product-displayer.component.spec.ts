import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayerComponent } from './product-displayer.component';

describe('ProductDisplayerComponent', () => {
  let component: ProductDisplayerComponent;
  let fixture: ComponentFixture<ProductDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
