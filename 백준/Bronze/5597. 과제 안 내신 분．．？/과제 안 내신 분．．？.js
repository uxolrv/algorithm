const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const totalStudents = [...Array(30)].map((_, i) => i + 1);
const notSubmitted = totalStudents.filter((student) => !input.includes(student));

console.log(notSubmitted.join('\n'));
