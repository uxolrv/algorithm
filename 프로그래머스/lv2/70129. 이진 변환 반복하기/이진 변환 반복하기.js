function solution(s) {
  // 0을 제거한 배열
  let oneCollection = [];
  // 이진 변환의 결과
  let binary = s;
  let countZero = 0;
  let countTranslation = 0;

  while (binary !== '1') {
    oneCollection = binary.split('').filter((num) => num === '1');
    countZero += binary.length - oneCollection.length;
    binary = oneCollection.length.toString(2);
    countTranslation++;
  }

  return [countTranslation, countZero];
}
