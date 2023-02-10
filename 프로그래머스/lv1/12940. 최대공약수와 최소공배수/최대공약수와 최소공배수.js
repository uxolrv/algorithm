function solution(n, m) {
  const getGCD = (n, m) => {
    return n % m === 0 ? m : getGCD(m, n % m);
  };

  const getLCM = (n, m) => {
    return (n * m) / getGCD(n, m);
  };

  return [getGCD(n, m), getLCM(n, m)];
}