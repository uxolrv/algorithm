function solution(phone_number) {
  const hideLength = phone_number.length - 4;
  const number = '*'.repeat(hideLength);

  return number + phone_number.slice(hideLength);
}