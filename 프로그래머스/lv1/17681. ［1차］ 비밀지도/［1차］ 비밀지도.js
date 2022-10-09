function solution(n, arr1, arr2) {
    // 이진수로 바꾸는 함수
    function toBinaryNum (arr) {
        // 이진수로 변환
        let binaryArr = arr.map(el => el.toString(2))
        
        /*
        'binaryArr1' [ '1001', '10100', '11100', '10010', '1011' ]
        'binaryArr2' [ '11110', '1', '10101', '10001', '11100' ]
        */
        
        // 앞에 0 추가하여, 자리수 맞춰주기
        // padStart() ===> 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
        binaryArr = binaryArr.map(el => el.padStart(n, "0"))
        return binaryArr
    } 
  
    const binary1 = toBinaryNum(arr1)
    const binary2 = toBinaryNum(arr2)
    let result = [];

    for (let i = 0; i < n; i++) {
        // 한 줄을 해독한 결과를 담을 str
        let done = '';
        
        for (let j = 0; j < binary1[i].length; j++) {
        const num1 = binary1[i][j]
        const num2 = binary2[i][j]
        
        // 둘 중 하나라도 1 이라면 #, 아니면 " "
        if (num1 === "1" || num2 === "1") done += "#"
        else done += " "
        }
        result.push(done)
    }
    
    return result
}