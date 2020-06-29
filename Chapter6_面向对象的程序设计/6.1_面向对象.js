// -=-=-=-=-=-=-=-=-=-= js引擎是使用的两类属性 -=-=-=-=-=-=-=-=-=-=

// 仅在js引擎中使用，不能直接访问。
// 可以用Object.defineProperty(), Object.defineProperties()来修改

// -=-=-=-=-=-=-=-=-=-= 数据属性
// [[Configurable]]
// [[Enumerable]] 能否for-in
// [[Writable]] 能否修改值
// [[Value]] 包含这个属性的数据值

// -=-=-=-=-=-=-=-=-=-= 访问器属性
// [[Configurable]]
// [[Enumerable]] 能否for-in
// [[Get]]
// [[Set]]

// -=-=-=-=-=-=-=-=-=-= 创建对象 -=-=-=-=-=-=-=-=-=-=

// -=-=-=-=-=-=-=-=-=-= 工厂模式
// js中没有类，用函数来封装创建类似对象的接口
function createPersion(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(this.name);
  };
  return o;
}

var person1 = createPersion('Leo', 24, 'Software Engineer');
var person2 = createPersion('Siria', 22, 'Docter');

// -=-=-=-=-=-=-=-=-=-= 构造函数模式

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    alert(this.name);
  };
}

var person1 = new Person('Leo', 24, 'Software Engineer');
var person2 = new Person('Siria', 22, 'Docter');

// 用new操作符创建对象，实际上会经理4个过程
// 1. 创建一个新的对象
// 2. 将构造函数的作用域赋给改对象，因此this就指向了该对象
// 3. 执行构造函数中的代码
// 4. 返回新对象

// 每个对象有个constructor属性，即指向构造函数
alert(person1.constructor === Person); // true

// 构造函数与普通函数的区别就在于是不是用new来调用，是则就是构造函数

// -=-=-=-=-=-=-=-=-=-= 原型对象

// 可以理解为其他语言中的父类型

function Person() {
}

Person.prototype.name = "leo";
Person.prototype.age = 24;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  alert(this.name);
};

var person1 = new Person();
person1.sayName();    // leo

var person2 = new Person();
person2.name = 'siria';
person2.sayName();    // siria
