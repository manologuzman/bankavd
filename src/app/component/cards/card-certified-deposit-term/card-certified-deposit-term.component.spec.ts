import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertifiedDepositTermComponent } from './card-certified-deposit-term.component';

describe('CardCertifiedDepositTermComponent', () => {
  let component: CardCertifiedDepositTermComponent;
  let fixture: ComponentFixture<CardCertifiedDepositTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCertifiedDepositTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCertifiedDepositTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setItem()', () => {
    let item=[]; 
    component.setItem(item);
    expect(component).not.toBeNull();
  });

  it('should call ngOnChanges()', ()=> {
    spyOn(component, 'ngOnChanges').and.callThrough();
    fixture.detectChanges();
    expect(component.ngOnChanges()).toHaveBeenCalled();
})
 
});
