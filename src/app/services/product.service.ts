import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<any[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getJsons(): Observable<any> {
    return this.http.get('assets/data.json').pipe(
      tap((data: any) => {
        this.productsSubject.next(data.product || []);
      })
    );
  }

  pagarTarjeta(id: string, monto: number) {
    const currentProducts = this.productsSubject.getValue();
    const updatedProducts = currentProducts.map(p => {
      if (p.id === id) {
        // Deep copy to trigger change detection
        const updatedProduct = JSON.parse(JSON.stringify(p));
        
        // Deduct from current balance
        if (updatedProduct.productAccountBalances && updatedProduct.productAccountBalances.saldo_actual) {
            updatedProduct.productAccountBalances.saldo_actual.amount = Math.max(0, updatedProduct.productAccountBalances.saldo_actual.amount - monto);
        }
        
        // Reset minimum payment
        if (updatedProduct.productAccountBalances && updatedProduct.productAccountBalances.valor_pago_minimo) {
            updatedProduct.productAccountBalances.valor_pago_minimo.amount = 0;
        }

        return updatedProduct;
      }
      return p;
    });
    this.productsSubject.next(updatedProducts);
  }
}
