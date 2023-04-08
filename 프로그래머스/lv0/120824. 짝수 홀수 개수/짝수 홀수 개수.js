function solution(num_list) {
  return num_list.reduce(
    (acc, cur) => {
      if (cur % 2) acc[1]++;
      else acc[0]++;
      return acc;
    },
    [0, 0]
  );
}