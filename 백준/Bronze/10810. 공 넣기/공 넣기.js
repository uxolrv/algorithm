const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const baskets = Array(input[0][0]).fill(0);
const actions = input.slice(1);

for (let action of actions) {
  for (let i = action[0] - 1; i < action[1]; i++) {
    baskets[i] = action[2];
  }
}

console.log(baskets.join(' '));
