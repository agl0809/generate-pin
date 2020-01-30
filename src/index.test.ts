import { generatePin } from './index';

test('should return one-pin list by default', () => {
  expect(generatePin().length).toEqual(1);
});

test('should return a list of pins with a certain size', () => {
  const size = 5;

  expect(generatePin(size).length).toEqual(size);
});
