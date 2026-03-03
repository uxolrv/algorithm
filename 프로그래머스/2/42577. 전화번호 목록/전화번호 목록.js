function solution(phone_book) {
    let result = true;
    
    // 사전 순 정렬
    const sortedPhoneBook = phone_book.sort();

    // 사전 순 정렬이니, 그 다음 요소가 가장 현재와 동일 혹은 유사한 접두어
    for(let i = 0; i < sortedPhoneBook.length - 1; i++) {
        if (sortedPhoneBook[i + 1].startsWith(sortedPhoneBook[i])) {
            result = false;
            break;
        }
    }
    
    return result;
}

/*
// 에러 1개, 시간 초과 2개

function solution(phone_book) {
    let result = true;
    
    
    for(let i = 0; i < phone_book.length; i++) {
        // ,로 연결한 string 형태의 phone_book
        const joinedPhoneBook = `,${phone_book.slice(0, i)}${phone_book.slice(i + 1)}`;

        if (joinedPhoneBook.indexOf(`,${phone_book[i]}`) !== -1) {
            result = false;
            break;
        }
    }
    
    return result;
    
}
*/