import { NproductsPipe } from './nproducts.pipe';

describe('NproductsPipe', () => {
  it('create an instance', () => {
    const pipe = new NproductsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should by return maysprimera()', () => {
    const pipe = new NproductsPipe();
    pipe.maysprimera("hi");
    expect(pipe).not.toBeNull;
  });

  it('should by return transform()', () => {
    const pipe = new NproductsPipe();
    pipe.transform("Manuel");
    expect(pipe).not.toBeNull;
  });
});
