import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nproducts'
})
export class NproductsPipe implements PipeTransform {

  private readonly nombres: { [key: string]: string } = {
    DEPOSIT_ACCOUNT: 'Cuenta de ahorros',
    CURRENT_ACCOUNT: 'Cuenta corriente',
    CERTIFIED_DEPOSIT_TERM: 'Certificado de depósito a término',
    CREDIT: 'Crédito',
    CREDIT_CARD: 'Tarjeta de crédito'
  };

  transform(value: string): string {
    if (!value) {
      return '';
    }
    if (this.nombres[value]) {
      return this.nombres[value];
    }
    return this.maysprimera(value.replace(/_/g, ' ').toLowerCase());
  }

  maysprimera(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
