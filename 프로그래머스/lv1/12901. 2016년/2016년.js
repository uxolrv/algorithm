function solution(a, b) {
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const sum = monthDays.slice(0, a).reduce((acc, cur) => acc + cur, 0) + b;

  return dayOfWeek[sum % 7];
}