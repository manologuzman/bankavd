import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enmascarar'
})
export class EnmascararPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    const valor = value.toString().replace(/\s/g, '');
    let result = '';

    for (let i = 0; i < valor.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result += ' ';
      }
      if (i < valor.length - 4) {
        result += '*';
      } else {
        result += valor[i];
      }
    }

    return result;
  }

}
