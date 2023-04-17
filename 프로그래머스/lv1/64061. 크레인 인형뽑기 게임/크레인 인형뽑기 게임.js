function solution(board, moves) {
  const basket = [];
  let result = 0;

  for (let move of moves) {
    for (let line of board) {
      const doll = line[move - 1];

      if (doll) {
        line[move - 1] = 0;

        if (basket[basket.length - 1] === doll) {
          basket.pop();
          result += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  }

  return result;
}