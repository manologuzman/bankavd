import { NproductsPipe } from './nproducts.pipe';

describe('NproductsPipe', () => {
  it('create an instance', () => {
    const pipe = new NproductsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should translate known product types', () => {
    const pipe = new NproductsPipe();
    expect(pipe.transform('CREDIT_CARD')).toEqual('Tarjeta de crédito');
    expect(pipe.transform('DEPOSIT_ACCOUNT')).toEqual('Cuenta de ahorros');
  });

  it('should format unknown values', () => {
    const pipe = new NproductsPipe();
    expect(pipe.transform('OTRO_PRODUCTO')).toEqual('Otro producto');
  });
});
