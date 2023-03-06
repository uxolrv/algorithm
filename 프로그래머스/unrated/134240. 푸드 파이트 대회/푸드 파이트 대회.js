function solution(food) {
  let placement = '';

  for (let i = 1; i <= food.length; i++) {
    placement += `${i}`.repeat(food[i] / 2);
  }

  return `${placement}0${[...placement].reverse().join('')}`;
}