function solution(phone_number) {
  const hiddenLength = phone_number.length - 4;
  const hidden = '*'.repeat(hiddenLength);

  return hidden + phone_number.slice(hiddenLength);
}