function sum(a, b, q) {
  const r = 0;
  if (a === r) {
    return a * b;
  }
  if (a < 0) {
    return b - a;
  }
  if (q) {
    return q;
  }
  return a + b;
}
module.exports = sum;
