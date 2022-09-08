var input = require('fs').readFileSync("/dev/stdin").toString().split(' ');
// 킹 1 / 퀸 1 / 룩 2 / 비숍 2 / 나이트 2 / 폰 8

var king = parseInt(input[0]);
var queen = parseInt(input[1]);
var rook = parseInt(input[2]);
var bishop = parseInt(input[3]);
var knight = parseInt(input[4]);
var pawn = parseInt(input[5]);

console.log(1 - king, 1 - queen, 2 - rook, 2 - bishop, 2 - knight, 8 - pawn);