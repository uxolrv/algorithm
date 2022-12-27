function solution(nums) {
    const max = nums.length/2
    const typeNum = new Set(nums).size
    return typeNum > max ? max : typeNum
}