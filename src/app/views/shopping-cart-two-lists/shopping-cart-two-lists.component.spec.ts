import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTwoListsComponent } from './shopping-cart-two-lists.component';

describe('ShoppingCartTwoListsComponent', () => {
  let component: ShoppingCartTwoListsComponent;
  let fixture: ComponentFixture<ShoppingCartTwoListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartTwoListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartTwoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
