function solution(price, money, count) {
  let total = 0;

  while (count !== 0) {
    total += price * count;
    count--;
  }

  return money < total ? total - money : 0;
}