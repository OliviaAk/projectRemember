const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 6)).toBe(7);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(0, 3)).toBe(0);
});
