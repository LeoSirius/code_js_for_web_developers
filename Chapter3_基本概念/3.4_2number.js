// 三个数值转换函数，第一后可以处理任何类型，后面两个专门处理字符串
// Number()
// parseInt()
// parseFloat()

var n1 = Number("Hi");        // NaN
var n2 = Number("");          // 0
var n3 = Number("0000011");   // 11
var n4 = Number(true);        // 1

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
