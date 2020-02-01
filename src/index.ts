const pinToDigits = (pin: string): number[] =>
  pin.split('').map((elem: string) => parseInt(elem, 10));

const isOrdered = (segment: number[]): boolean =>
  segment[1] * 3 === segment[0] + segment[1] + segment[2] ? true : false;

const hasThreeDigitsOrdered = (pin: number[]): boolean =>
  isOrdered(pin.slice(0, 3)) || isOrdered(pin.slice(1));

const hasSameNeighbors = (pin: number[]): boolean => {
  for (let i = 0; i < pin.length - 1; i++) {
    if (pin[i] === pin[i + 1]) {
      return true;
    }
  }
  return false;
};

const getRandomPin = (): string => {
  const randomPin = Math.random()
    .toFixed(4)
    .toString();

  return randomPin.substring(randomPin.indexOf('.') + 1);
};

const getValidPin = (pins: string[]): string => {
  const pin = getRandomPin();
  const digits = pinToDigits(pin);

  return hasSameNeighbors(digits) ||
    hasThreeDigitsOrdered(digits) ||
    pins.includes(pin)
    ? getValidPin(pins)
    : digits.join('');
};

export const generatePin = (size: number = 1): string[] => {
  const pins: string[] = [];

  while (pins.length < size) {
    pins.push(getValidPin(pins));
  }

  return pins;
};
