export function constant(c) {
  return `${c}-${randomInt(0, 1000)}`
}

function randomInt(lo, hi) {
  return Math.floor(Math.random() * (hi-lo) + lo);
}
