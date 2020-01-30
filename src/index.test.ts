import { generatePin } from './index';

test('should return one-pin list by default', () => {
  expect(generatePin().length).toEqual(1);
});
