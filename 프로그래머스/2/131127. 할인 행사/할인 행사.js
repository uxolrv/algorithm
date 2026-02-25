function solution(want, number, discount) {
    // 회원 자격 일수
    const DISCOUNT_DAYS = 10;
    // 할인받을 수 있는 일수
    let count = 0
    
    // 사고 싶은 품목 & 개수 Map
    const wantMap = want.reduce((acc, item, i) => {
        return {
            ...acc,
            [item]: number[i]
        }
    }, {})

    for(let i = 0; i <= discount.length - DISCOUNT_DAYS; i++) {
        // 10개 품목씩 나눠서 확인
        const items = discount.slice(i, i + DISCOUNT_DAYS);
        const buyMap = {...wantMap};
        
        for (let j = 0; j < items.length; j++) {
            if (buyMap[items[j]] === undefined || buyMap[items[j]] === 0) {
                break;
            }
            
            buyMap[items[j]] -= 1
        }
        
        // 10개 품목 전체 할인 받았는지
        const isAllDiscount = Object.values(buyMap).every((value) => value === 0);
        
        if (isAllDiscount) {
            count++;
        }
    }

    return count;
}