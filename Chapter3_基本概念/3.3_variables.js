function test() {
  var message1 = "hi";
}
test();
console.log(message1);  // 错误，var定义的变量是局部变量

function test() {
  message2 = "hi";
}
test();
console.log(message2);  // 正确，没有var定义的变量是全局变量


