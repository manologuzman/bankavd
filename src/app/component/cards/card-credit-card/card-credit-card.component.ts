import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-credit-card',
  templateUrl: './card-credit-card.component.html',
  styleUrls: ['./card-credit-card.component.css']
})
export class CardCreditCardComponent implements OnInit, OnChanges {

  @Input() item: any;
  progreso = 0;
  sinFechaPago = false;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.actualizarProgreso();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      this.actualizarProgreso();
    }
  }

  private actualizarProgreso() {
    if (!this.item) return;
    
    this.sinFechaPago = !this.item.dueDate;

    if (this.sinFechaPago && this.item.productAccountBalances) {
      const cupo = this.item.productAccountBalances.cupo_total.amount;
      const saldo = this.item.productAccountBalances.saldo_actual.amount;
      if (cupo > 0) {
         this.progreso = (saldo / cupo) * 100;
      }
    }
  }

  pagar() {
    const montoMinimo = this.item.productAccountBalances?.valor_pago_minimo?.amount || 0;
    if (montoMinimo > 0) {
      this.productService.pagarTarjeta(this.item.id, montoMinimo);
      this.toastr.success(`Abono por ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(montoMinimo)} aplicado a la tarjeta ${this.item.id.slice(-4)}`, 'Pago Exitoso');
    } else {
      this.toastr.info('No tienes pago mínimo pendiente para esta tarjeta.', 'Información');
    }
  }
}
