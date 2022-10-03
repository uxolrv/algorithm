const input = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim())

let sugar = input
let count = 0;

while (sugar > 0) {

    // 5kg만으로 배달 가능
    if (sugar % 5 === 0) {
        sugar -= 5
        count++
    }

    // 3kg만으로 배달 가능
    else if (sugar % 3 === 0) {
        sugar -= 3
        count++
    } 

    // 5kg & 3kg 섞어야 할 때
    else if (sugar - 5 >= 0) {
        sugar -= 5
        count++
    }

    // N kg 만들기 불가능
    else {
        break;
    }  
}

if (sugar === 0) {
    console.log(count)
} else {
    console.log(-1)
}