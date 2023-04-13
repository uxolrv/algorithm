const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const baskets = [...Array(input[0][0])].map((_, i) => i + 1);
const actions = input.slice(1);

for (let action of actions) {
  let temp = baskets[action[0] - 1];
  baskets[action[0] - 1] = baskets[action[1] - 1];
  baskets[action[1] - 1] = temp;
}

console.log(baskets.join(' '));