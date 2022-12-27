function solution(nums) {
    const num = nums.length/2
    const unduplicated = [...new Set(nums)]
    return unduplicated.length > num ? num : unduplicated.length
}