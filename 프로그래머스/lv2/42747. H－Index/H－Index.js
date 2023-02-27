
function solution(citations) {
  let result = citations.length;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const restNum = citations.length - i - 1;
    if (citations[i] <= restNum) {
      result = restNum;
    }
  }

  return result;
}
