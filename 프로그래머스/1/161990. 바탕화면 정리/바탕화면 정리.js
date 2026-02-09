function solution(wallpaper) {
    const result = wallpaper.reduce((acc, cur, i) => {
        const fileIndex = cur.indexOf('#');
        const fileLastIndex = cur.lastIndexOf('#')

        // 현재 줄에 파일 없으면 패스
        if (fileIndex === -1) {
            return acc
        }
        
        // 이전에 저장된 값이 전혀 없을 때 초기 값 세팅
        if (!acc.length) {
            return [i, fileIndex, i + 1, fileLastIndex + 1]
        }

        // 현재 파일 X 위치값이 이전에 저장된 위치보다 더 앞선 위치일 때 드래그 시작점 Y값 변경
        if (acc[1] > fileIndex) {
            acc[1] = fileIndex
        }
        
        // 현재 파일 Y 위치값이 이전에 저장된 위치보다 크면 드래그 끝점 X값 변경
        if (acc[2] <= i) {
            acc[2] = i + 1
        }
        
        // 현재 줄의 마지막 파일 X 위치값이 이전에 저장된 위치보다 크면 드래그 끝점 Y값 변경
        if (acc[3] <= fileLastIndex) {
            acc[3] = fileLastIndex + 1
        }

        return acc
    }, [])

    return result.length ? result : [0, 0, 0, 0]
}