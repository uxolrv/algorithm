function solution(a, b) {
  const dayOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let days = (a - 1) * 30 + (b - 1);

  if (a !== 1 && a !== 3) {
    if (a <= 5) days += 1;
    else if (a <= 7) days += 2;
    else if (a === 8) days += 3;
    else if (a <= 10) days += 4;
    else if (a <= 12) days += 5;
  }

  return dayOfWeek[days % 7];
}
