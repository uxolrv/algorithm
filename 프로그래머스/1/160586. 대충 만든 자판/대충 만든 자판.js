function solution(keymap, targets) {
  const memo = {};

  return targets.map((target) => {
    let sum = 0;
		
    for (let i = 0; i < target.length; i++) {
      if (memo[target[i]]) {
        sum += memo[target[i]];
        continue;
      }

      let idx = 0;

      keymap.forEach((map) => {
        const findIndex = map.indexOf(target[i]) + 1;

        if (!idx || (findIndex && findIndex < idx)) {
          idx = findIndex;
        }
      });

      if (!idx) return -1;

      sum += idx;

      memo[target[i]] = idx;
    }

    return sum;
  });
}