import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreditCardComponent } from './card-credit-card.component';

describe('CardCreditCardComponent', () => {
  let component: CardCreditCardComponent;
  let fixture: ComponentFixture<CardCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreditCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditCardComponent);
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

  it('should by true valpayment()', () => {
    let val = "";
    component.valpayment(val);
    expect(component).toBeTruthy();
  });


  it('should by false valpayment()', () => {
    let val = "122";
    component.valpayment(val);
    expect(component).toBeFalsy();
  });

});
