import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nproducts'
})
export class NproductsPipe implements PipeTransform {

  transform(value: string): string {
    return this.maysprimera(value.replace(/_/g, ' ').toLowerCase());
  }
  maysprimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
