import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bank AVD';
  mostrarOtros = false;
  banco = 'BANCO_1';
  product: any[] = [];
  productosVisibles: any[] = [];
  totalAhorro = 0;

  private readonly tiposAhorro = ['DEPOSIT_ACCOUNT', 'CURRENT_ACCOUNT', 'CERTIFIED_DEPOSIT_TERM'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getJsons().subscribe(
      (data: any) => {
        this.product = data.product || [];
        this.actualizarVista();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onToggleOtros() {
    this.actualizarVista();
  }

  private actualizarVista() {
    this.productosVisibles = this.mostrarOtros
      ? this.product
      : this.product.filter((item) => item.accountInformation.bank === this.banco);

    this.totalAhorro = this.productosVisibles
      .filter((item) => this.tiposAhorro.includes(item.accountInformation.productType))
      .reduce((total, item) => total + this.obtenerMontoAhorro(item), 0);
  }

  private obtenerMontoAhorro(item: any): number {
    const balances = item.productAccountBalances || {};
    if (balances.saldo_disponible && typeof balances.saldo_disponible.amount === 'number') {
      return balances.saldo_disponible.amount;
    }
    if (balances.valor_constitucion && typeof balances.valor_constitucion.amount === 'number') {
      return balances.valor_constitucion.amount;
    }
    return 0;
  }
}
