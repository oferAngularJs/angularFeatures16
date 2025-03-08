import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCart2Component } from './shopping-cart2.component';

describe('ShoppingCart2Component', () => {
  let component: ShoppingCart2Component;
  let fixture: ComponentFixture<ShoppingCart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
