import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCreditComponent } from './card-credit.component';
import { NproductsPipe } from '../../../pipes/nproducts.pipe';

describe('CardCreditComponent', () => {
  let component: CardCreditComponent;
  let fixture: ComponentFixture<CardCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreditComponent, NproductsPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
