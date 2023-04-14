const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const basketsNum = input[0][0];
const baskets = [...Array(basketsNum)].map((_, i) => i + 1);
const actions = input.slice(1);

for (let action of actions) {
  const reverse = baskets.slice(action[0] - 1, action[1]).reverse();

  for (let i = action[0] - 1, j = 0; i < action[1]; i++, j++) {
    baskets[i] = reverse[j];
  }
}

console.log(baskets.join(' '));
