const getRandomPin = (): string => {
  const randomPin = Math.random()
    .toFixed(4)
    .toString();

  return randomPin.substring(randomPin.indexOf('.') + 1);
};

export const generatePin = (size: number = 1): string[] => {
  const pinCollection: string[] = [];

  while (pinCollection.length < size) {
    const newPin = getRandomPin();
    pinCollection.push(newPin);
  }

  return pinCollection;
};
