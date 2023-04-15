function solution(numbers, hand) {
  let position = [
    [3, 0],
    [3, 2],
  ];
  const rule = {
    left: [1, 4, 7],
    right: [3, 6, 9],
  };

  const a = numbers.reduce((acc, cur) => {
    const press = cur === 0 ? [3, 1] : [Math.floor((cur - 1) / 3), (cur - 1) % 3]; // 이번에 누를 위치
    let usedHand = ''; // 이번에 사용한 손

    if (rule.left.includes(cur)) {
      usedHand = 'L';
    } else if (rule.right.includes(cur)) {
      usedHand = 'R';
    } else {
      const leftDistance = getDistance(press, position[0]);
      const rightDistance = getDistance(press, position[1]);

      if (leftDistance < rightDistance) {
        usedHand = 'L';
      } else if (leftDistance > rightDistance) {
        usedHand = 'R';
      } else {
        usedHand = hand === 'left' ? 'L' : 'R';
      }
    }

    usedHand === 'L' ? (position[0] = press) : (position[1] = press);

    return acc + usedHand;
  }, '');

  return a;
}

const getDistance = (press, position) => {
  return Math.abs(press[0] - position[0]) + Math.abs(press[1] - position[1]);
};
