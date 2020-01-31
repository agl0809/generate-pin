const getRandomPin = (): string => {
  const randomPin = Math.random()
    .toFixed(4)
    .toString();

  return randomPin.substring(randomPin.indexOf('.') + 1);
};

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

const getValidPin = (): string => {
  const pin = getRandomPin();
  const digits = pinToDigits(pin);

  return hasSameNeigbors(digits) ? getValidPin() : digits.join('');
};

export const getPins = (size: number = 1): string[] => {
  const pins: string[] = [];

  while (pins.length < size) {
    pins.push(getValidPin());
  }

  return pins;
};
