function solution(today, terms, privacies) {
    // YYYY.MM.DD 형식의 날짜를 일수로 변환하는 함수
    const getDayCount = (date, addedMonth = 0) => {
        const [year, month, day] = date.split('.').map(Number);
        return (year * 12 * 28) + ((month + addedMonth) * 28) + day;
    }
    
    // 약관 명과 유효 기간 Map 형식으로 변환
    const termsMap = terms.reduce((acc, cur) => {
        const [term, period] = cur.split(' ');
  
        return {...acc, [term]: Number(period)}
    }, {})

    
    const result = privacies.reduce((acc, privacy, i) => {
        const [collectionDate, collectedTerm] = privacy.split(' ')
        
        // 만료일 수
        const expiredDayCount = getDayCount(collectionDate, termsMap[collectedTerm]);
        // 금일 수
        const todayDayCount = getDayCount(today);
        
        if (expiredDayCount <= todayDayCount) {
            return [...acc, i + 1]
        }
        
        return acc;
    }, [])
    
    return result;
}