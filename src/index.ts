const pinToDigits = (pin: string): number[] =>
  pin.split('').map((elem: string) => parseInt(elem, 10));

const isOrdered = (segment: number[]): boolean =>
  segment[1] * 3 === segment[0] + segment[1] + segment[2] ? true : false;

const hasThreeDigitsOrdered = (pin: number[]): boolean =>
  isOrdered(pin.slice(0, 3)) || isOrdered(pin.slice(1));

const hasSameNeigbors = (pin: number[]): boolean => {
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

const getValidPin = (): string => {
  const pin = getRandomPin();
  const digits = pinToDigits(pin);

  return hasSameNeigbors(digits) || hasThreeDigitsOrdered(digits)
    ? getValidPin()
    : digits.join('');
};

export const getPins = (size: number = 1): string[] => {
  const pins: string[] = [];

  while (pins.length < size) {
    pins.push(getValidPin());
  }

  return pins;
};
