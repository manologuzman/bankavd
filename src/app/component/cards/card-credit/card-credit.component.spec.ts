import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreditComponent } from './card-credit.component';

describe('CardCreditComponent', () => {
  let component: CardCreditComponent;
  let fixture: ComponentFixture<CardCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should setItem()', () => {
    let item = [];
    component.setItem(item);
    expect(component).not.toBeNull();
  });

  it('should call ngOnChanges()', () => {
    spyOn(component, 'ngOnChanges').and.callThrough();
    fixture.detectChanges();
    expect(component.ngOnChanges()).toHaveBeenCalled();
  });
});
