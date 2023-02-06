function solution(brown, yellow) {
  // Math.sqrt(brown + yellow)가 정수면 정사각형
  if (Math.sqrt(brown + yellow) % 1 === 0) {
    return [Math.sqrt(brown + yellow), Math.sqrt(brown + yellow)];
  }

  let yellowHeight = 1; // 노란색 격자 높이
  let column = 3; // 카펫 세로 길이

  while ((yellow / yellowHeight + 2) * column !== brown + yellow) {
    yellowHeight++;
    column++;
  }

  return [yellow / yellowHeight + 2, column];
}

/*
  🟫🟫🟫🟫🟫🟫   ==>  전체 가로 길이 = 전체 노란색 개수 / 노란색 세로 길이 + 2
  🟫🟨🟨🟨🟨🟫   
  🟫🟨🟨🟨🟨🟫
  🟫🟫🟫🟫🟫🟫   ==>  전체 가로 길이 * 전체 세로 길이 = brown 개수 + yellow 개수
*/
