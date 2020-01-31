import { getPins } from '../index';

describe('generate-pin', () => {
  describe('generating a collection', () => {
    test('should return one pin by default', () => {
      expect(getPins().length).toEqual(1);
    });

    test('should return a certain number of pins', () => {
      const size = 5;

      expect(getPins(size).length).toEqual(size);
    });
  });

  describe('generating pins', () => {
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
  });
});

const pinToDigits = (pin: string): number[] =>
  pin.split('').map((elem: string) => parseInt(elem, 10));

const hasSameNeigbors = (pin: number[]): boolean => {
  for (let i = 0; i < pin.length - 1; i++) {
    if (pin[i] === pin[i + 1]) {
      return true;
    }
  }

  return false;
};
