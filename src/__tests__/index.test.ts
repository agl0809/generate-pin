import { getPins } from '../index';

describe('generate-pin', () => {
  test('should return one pin by default', () => {
    expect(getPins().length).toEqual(1);
  });

  test('should return a certain number of pins', () => {
    const size = 5;

    expect(getPins(size).length).toEqual(size);
  });

  test('should be strings', () => {
    const pins = getPins();

    pins.forEach((pin: string) => {
      expect(typeof pin).toEqual('string');
    });
  });

  test('should have four digits', () => {
    const pins = getPins();

    pins.forEach((pin: string) => {
      expect(pin.length).toEqual(4);
    });
  });

  test('should not have two same consecutive digits', () => {
    const pins = getPins();

    pins.forEach((pin: string) => {
      const digits = pinToDigits(pin);
      expect(hasSameNeigbors(digits)).toBeFalsy();
    });
  });

  test('should not have three consecutive digits asc or desc', () => {
    const pins = getPins();

    pins.forEach((pin: string) => {
      const digits = pinToDigits(pin);
      expect(hasThreeDigitsOrdered(digits)).toBeFalsy();
    });
  });

  test('should return pins different from each others', () => {
    const size = 5;
    const pins = getPins(size);

    expect([...new Set(pins)].length).toEqual(size);
  });
});

const hasSameNeigbors = (pin: number[]): boolean => {
  for (let i = 0; i < pin.length - 1; i++) {
    if (pin[i] === pin[i + 1]) {
      return true;
    }
  }
  return false;
};

const pinToDigits = (pin: string): number[] =>
  pin.split('').map((elem: string) => parseInt(elem, 10));

const hasThreeDigitsOrdered = (pin: number[]): boolean =>
  isOrdered(pin.slice(0, 3)) || isOrdered(pin.slice(1));

const isOrdered = (segment: number[]): boolean =>
  segment[1] * 3 === segment[0] + segment[1] + segment[2] ? true : false;
