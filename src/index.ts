export const generatePin = (size: number = 1): string[] => {
  const pinCollection: string[] = [];

  while (pinCollection.length < size) {
    const newPin = Math.random().toString();
    pinCollection.push(newPin);
  }

  return pinCollection;
};
