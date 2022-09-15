let upto10000 = [] 

for (let i = 1; i <= 10000; i++) {
    upto10000.push(i)
}

let constructors = [];

    for (let i = 1; i <= 10000; i++) {
        if (i < 10) {
            constructors.push(i + i)
        } else {
            let stringI = String(i)
            if (i < 100) {
                constructors.push(i + Number(stringI[0]) + Number(stringI[1]))
            } else if (i < 1000) {
                constructors.push(i + Number(stringI[0]) + Number(stringI[1]) + Number(stringI[2]))
            } else if (i < 10000) {
                constructors.push(i + Number(stringI[0]) + Number(stringI[1]) + Number(stringI[2]) + Number(stringI[3]))
            }
        }
}

let selfNumber = upto10000.filter(el => !constructors.includes(el))

selfNumber.map(el => console.log(el))
