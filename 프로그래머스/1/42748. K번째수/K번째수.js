function solution(array, commands) {
    return commands.map((command) => {
        const [start, end, target] = command;
        const sortedArray = array.slice(start - 1, end).sort((a, b) => a - b);
        
        return sortedArray[target - 1];
    })
}