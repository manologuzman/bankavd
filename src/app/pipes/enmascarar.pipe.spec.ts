import { EnmascararPipe } from './enmascarar.pipe';

describe('EnmascararPipe', () => {
  it('create an instance', () => {
    const pipe = new EnmascararPipe();
    expect(pipe).toBeTruthy();
  });

  it('should by return transform()', () => {
    const pipe = new EnmascararPipe();
    pipe.transform(110001111122222);
    expect(pipe).not.toBeNull;
  });

  it('should by return transform()', () => {
    const pipe = new EnmascararPipe();
    pipe.transform(1100011111);
    expect(pipe).not.toBeNull;
  }); 
});
