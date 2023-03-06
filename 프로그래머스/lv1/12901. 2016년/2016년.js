function solution(a, b) {
  const DAY_OF_WEEK = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let dayNum = 0;

  if (a <= 2) {
    dayNum = (a - 1) * 31 + b;
  } else {
    dayNum = Math.ceil((a - 1) / 2) * 31 + Math.floor((a - 1) / 2) * 30 - 1 + b;
    if (a > 7 && a % 2 === 1) dayNum++; // 8월부터는 짝수 달이 31일
  }

  return DAY_OF_WEEK[dayNum % 7];
}
