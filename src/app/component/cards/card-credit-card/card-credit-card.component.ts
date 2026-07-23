import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card-credit-card',
  templateUrl: './card-credit-card.component.html',
  styleUrls: ['./card-credit-card.component.css']
})
export class CardCreditCardComponent implements OnChanges {
  @Input() item: any;
  progreso = 0;
  sinFechaPago = false;

  ngOnChanges() {
    if (!this.item || !this.item.productAccountBalances) {
      return;
    }

    this.sinFechaPago = !this.item.dueDate;

    const cupo = this.item.productAccountBalances.cupo_total;
    const saldo = this.item.productAccountBalances.saldo_actual;
    if (cupo && cupo.amount > 0 && saldo) {
      this.progreso = Math.min(100, Math.max(0, (Math.abs(saldo.amount) / cupo.amount) * 100));
    } else {
      this.progreso = 0;
    }
  }
}
