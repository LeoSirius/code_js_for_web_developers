// -=-=-=-=-=-=-=-=-=-= js引擎使用的两类属性 -=-=-=-=-=-=-=-=-=-=

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
person2.name = 'siria';      // 给实例添加一个属性，会屏蔽原型对象中的同名属性
person2.sayName();           // siria
delete person2.name;         // 用delete删除后，则可以访问原型对象中的属性
person2.sayName();           // leo

// isPrototypeOf() 判断是否是实例的原型对象
// getPrototypeOf() 返回实例的原型对象
alert(Person.prototype.isPrototypeOf(person1));              // true
alert(Object.getPrototypeOf(person1) === Person.prototype);   // true

// hasOwnProperty判断属性是否是实例属性
alert(person2.hasOwnProperty('name'));            // false

// in 操作符，在对象能访问该属性时返回true，不论是否是原型属性还是实例属性
alert('name' in person2);                         // true

// 所有自定义属性都是可枚举的
// keys()返回所有可枚举的实例属性
// getOwnPropertyNames()返回所有实例属性
person2.name = 'siria';
alert(Object.keys(person2));                  // name
alert(Object.getOwnPropertyNames(person2));   // name

// -=-=-=-=-=-=-=-=-=-= 继承 -=-=-=-=-=-=-=-=-=-=

// js中继承通过原型链实现，原型链的构建是通过将一个父类型实例赋值给子构造函数的原型实现的

// -=-=-=-=-=-=-=-=-=-= 原型链
// 正常情况下，构造函数有一个原型对象prototype，原型对象包含指向构造函数的指针contructor。
// 实例也有一个指向原型对象的指针protytype。

// SuperType有一个属性property和一个方法getSuperValue

function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
}

// SubType也有一个属性和一个方法

function SubType() {
  this.subproperty = false;
}

SubType.prototype.getSubValue = function() {
  return this.subproperty;
}

// 继承父类
SubType.prototype = new SuperType();

var instance = new SubType();
alert(instance.getSuperValue());   // true， 调用父类中的方法
