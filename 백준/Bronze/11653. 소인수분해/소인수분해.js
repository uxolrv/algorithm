const input = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim());
let result = [];

function primeFactorization(num) {
    if (num === 1) {
        return result;
    }

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
            num = num / i;
            return primeFactorization(num);
        }
    }
}

primeFactorization(input);

for (let el of result) {
    console.log(el);
}