import { EnmascararPipe } from './enmascarar.pipe';

describe('EnmascararPipe', () => {
  it('create an instance', () => {
    const pipe = new EnmascararPipe();
    expect(pipe).toBeTruthy();
  });

  it('should mask leaving last 4 digits', () => {
    const pipe = new EnmascararPipe();
    expect(pipe.transform(4544769920667611)).toEqual('**** **** **** 7611');
  });

  it('should handle short values', () => {
    const pipe = new EnmascararPipe();
    expect(pipe.transform(1234)).toEqual('1234');
  });
});
