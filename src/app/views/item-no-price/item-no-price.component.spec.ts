import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNoPriceComponent } from './item-no-price.component';

describe('ItemNoPriceComponent', () => {
  let component: ItemNoPriceComponent;
  let fixture: ComponentFixture<ItemNoPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemNoPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNoPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
