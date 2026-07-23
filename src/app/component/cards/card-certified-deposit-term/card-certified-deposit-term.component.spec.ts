import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCertifiedDepositTermComponent } from './card-certified-deposit-term.component';
import { NproductsPipe } from '../../../pipes/nproducts.pipe';

describe('CardCertifiedDepositTermComponent', () => {
  let component: CardCertifiedDepositTermComponent;
  let fixture: ComponentFixture<CardCertifiedDepositTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCertifiedDepositTermComponent, NproductsPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCertifiedDepositTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
