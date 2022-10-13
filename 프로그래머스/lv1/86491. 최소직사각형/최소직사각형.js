function solution(sizes) {
    let w = 0;
    let h = 0;
  	sizes.map(el => {
      el.sort((a,b) => a - b)
      if (el[0] > h) h = el[0]
      if (el[1] > w) w = el[1]
    })
  return w * h
}