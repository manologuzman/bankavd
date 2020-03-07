import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'enmascarar'
})
export class EnmascararPipe implements PipeTransform {

  transform(value: Number): string {
    let valor = value.toString();
    let result = '';

    for (var i = 0; i < valor.length; i++) {
      if (i <= 12) {
        if (i % 4 == 0) {
          result += ' ';
          result += '*';
        } else {
          result += '*';
        }
      } else {
        result += valor[i];
      }
    }
    return result;
  }

}
