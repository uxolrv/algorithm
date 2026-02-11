function solution(elements) {
    const set = new Set(elements)

    // 슬라이스할 개수 (i)
    for (let i = 2; i <= elements.length; i++) {
        // 슬라이스할 시작 위치 인덱스 (j)
        for (let start = 0; start < elements.length; start++) {
            const end = (start + i);
            let slicedElements = elements.slice(start, end);
            
            // 끝 위치가 elements의 길이를 초과한다면
            if (end >= elements.length) {
                slicedElements = [...elements.slice(start), ...elements.slice(0, end - elements.length)]
            }

            const sum = slicedElements.reduce((acc, cur) => acc + cur, 0);
            set.add(sum)
        }
    }

    return [...set].length
}