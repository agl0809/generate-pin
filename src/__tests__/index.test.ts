import { generatePin } from '../index';

describe('filling a pin collection', () => {
  test('should return one pin by default', () => {
    expect(generatePin().length).toEqual(1);
  });

  test('should return a certain number of pins', () => {
    const size = 5;

    expect(generatePin(size).length).toEqual(size);
  });
});

describe('generating a pin', () => {
  test('should have four digits', () => {
    const pinLength = 4;

    expect(generatePin()[0].length).toEqual(pinLength);
  });
});
