// 函数是对象，是Function类型的实例。函数名是指针

// -=-=-=-=-=-=-=-=-=-= 函数声明与函数表达式 -=-=-=-=-=-=-=-=-=-=

// 函数声明会被解析器率先读取
alert(sum(10, 10));
function sum(num1, num2) {
  return num1 + num2;
}

// -=-=-=-=-=-=-=-=-=-=

// 函数表达式则不会。下面会报错：Error: sum is not defined
alert(sum(10, 10));
var sun = function(num1, num2) {
  return num1 + num2;
}

// -=-=-=-=-=-=-=-=-=-= 函数的内部属性 -=-=-=-=-=-=-=-=-=-=

// arguments对象有个属性callee。指向拥有arguments对象的函数，即调用函数本身。
// 递归时用callee可以避免函数改名后的错误，降低耦合度

function factorial(num) {
  if (num <= 1)
    return 1;
  else
    return num * arguments.callee(num - 1);   // 如果这里不用callee的话，下面两个alert都是0
}
var trueFac = factorial;
factorial = function(){ return 0; }    // 让factorial指向新的函数
alert(trueFac(5));    // 120
alert(factorial(5));  // 0

// -=-=-=-=-=-=-=-=-=-=

// this引用函数执行的环境对象
window.color = "red";
var o = {color: "blue"};

function sayColor() {
  alert(this.color);
}

// 第一次调用函数的环境对象是window。第二次则是o
sayColor();    // red
o.sayColor = sayColor;
o.sayColor();  // blue

// -=-=-=-=-=-=-=-=-=-= 函数的属性和方法 -=-=-=-=-=-=-=-=-=-=

// 函数的length属性既是其预期接受的参数个数
function sayName(name) {
  alert(name);
}

function sum(num1, num2) {
  return num1 + num2;
}

function sayHi() {
  alert("Hi")
}

alert(sayName.length);  // 1
alert(sum.length);      // 2
alert(sayHi.length);    // 0

// -=-=-=-=-=-=-=-=-=-=
// apply和call方法可以指定函数的作用域。两个的区别在于接受参数的方式不同
function sum(num1, num2) {
  return num1 + num2;
}

function callSum1(num1, num2) {
  return sum.apply(this, arguments);    // apply后面的参数是一个数组
}

function callSum2(num1, num2) {
  return sum.call(this, num1, num2);    // call后面的参数是分开写的
}

alert(callSum1(10, 20));   // 30
alert(callSum2(10, 20));   // 30

// -=-=-=-=-=-=-=-=-=-=
// 下面利用call的第一个参数来指定函数的作用域
window.color = "red";
var o = {color: "blue"};

function sayColor() {
  alert(this.color);
}

sayColor();             // red
sayColor.call(this);    // red
sayColor.call(window);  // red
sayColor.call(o);       // blue

// -=-=-=-=-=-=-=-=-=-=
// 函数的bind方法会创建一个函数实例，并把this绑定到bind参数的对象上
window.color = "red";
var o = {color: "red"};

function sayColor() {
  alert(this.color);
}

var newFunc = sayColor.bind(o);   // 创建一个新的函数实例，并绑定this到o上
newFunc();     // red
