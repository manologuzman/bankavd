import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCurrentAccountComponent } from './card-current-account.component';
import { NproductsPipe } from '../../../pipes/nproducts.pipe';

describe('CardCurrentAccountComponent', () => {
  let component: CardCurrentAccountComponent;
  let fixture: ComponentFixture<CardCurrentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCurrentAccountComponent, NproductsPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCurrentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
