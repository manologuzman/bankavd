import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCreditCardComponent } from './card-credit-card.component';
import { NproductsPipe } from '../../../pipes/nproducts.pipe';
import { EnmascararPipe } from '../../../pipes/enmascarar.pipe';

describe('CardCreditCardComponent', () => {
  let component: CardCreditCardComponent;
  let fixture: ComponentFixture<CardCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreditCardComponent, NproductsPipe, EnmascararPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate progress on ngOnChanges', () => {
    component.item = {
      dueDate: '',
      productAccountBalances: {
        cupo_total: { amount: 1000 },
        saldo_actual: { amount: 250 },
        valor_pago_minimo: { amount: 10 },
        pago_total_pesos: { amount: 250 }
      },
      accountInformation: { productType: 'CREDIT_CARD' },
      id: '1234567890123456'
    };
    component.ngOnChanges();
    expect(component.progreso).toBe(25);
    expect(component.sinFechaPago).toBe(true);
  });
});
