// 函数是对象，是Function类型的实例。函数名是指针

// -=-=-=-=-=-=-=-=-=-= 函数声明与函数表达式 -=-=-=-=-=-=-=-=-=-=

// 函数声明会被解析器率先读取
alert(sum(10, 10));
function sum(num1, num2) {
  return num1 + num2;
}

// 函数表达式则不会。下面会报错：Error: sum is not defined
alert(sum(10, 10));
var sun = function(num1, num2) {
  return num1 + num2;
}

// -=-=-=-=-=-=-=-=-=-= 函数的内部属性 -=-=-=-=-=-=-=-=-=-=

// arguments对象有个属性callee。指向拥有arguments对象的函数，即调用函数本身。
// 用callee可以避免函数改名后的错误，降低耦合度

function factorial(num) {
  if (num <= 1)
    return 1;
  else
    return num * arguments.callee(num - 1);   // 如果这里不用callee的话，下面两个alert都是0
}
var trueFac = factorial;
factorial = function(){ return 0; }
alert(trueFac(5));    // 120
alert(factorial(5));  // 0