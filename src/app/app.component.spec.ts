import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from '../app/services/product.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bankavd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bankavd');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent()).toContain('bankavd app is running!');
  });

  it('should get getJsons', async(() => {
    const service: ProductService = TestBed.get(ProductService);
    service.getJsons().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));

  it('should call ngOnChanges()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'ngOnChanges').and.callThrough();
    fixture.detectChanges();
    expect(app.ngOnChanges()).toHaveBeenCalled();
  });

  it('should call ngOnInit()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'ngOnInit').and.callThrough();
    fixture.detectChanges();
    expect(app.ngOnInit()).toHaveBeenCalled();
  });

});
