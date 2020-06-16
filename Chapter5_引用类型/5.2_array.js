// js数组的两个特点
// 1. 动态大小
// 2. 保存的类型可不一致

// 类似Object，两种创建方式：构造函数和字面量
var arr1 = new Array("red", "blue", "green");
var arr2 = ["1", "2", "3"];

// -=-=-=-=-=-=-=-=-=-= 检测数组 -=-=-=-=-=-=-=-=-=-=
if (Array.isArray(arr1)) {
  console.log("arr1 is array");
}

// -=-=-=-=-=-=-=-=-=-= 转换方法 -=-=-=-=-=-=-=-=-=-=

console.log(arr1.toString());  // 转化为以逗号分隔的字符串
// join可以指定分隔符
console.log(arr1.join("|"));   // red|blue|green



// -=-=-=-=-=-=-=-=-=-= 栈、队列 -=-=-=-=-=-=-=-=-=-=
// 把数组当做栈用： push(), pop()
// 把数组当做队列用：pop(), shift()    shift()去掉第一个元素
// unshift()在头部插入



// -=-=-=-=-=-=-=-=-=-= 重排序方法 -=-=-=-=-=-=-=-=-=-=

var arr = [2,3,1,4,0];
arr.reverse();
console.log(arr);   // 0,4,1,3,2

arr.sort();
console.log(arr);   // 0,1,2,3,4   sort也可以指定一个compare函数作为参数


// -=-=-=-=-=-=-=-=-=-= 操作方法 -=-=-=-=-=-=-=-=-=-=

// - concat
// - slice
// - splice

// concat拼接数组, slice()切片。两个方法都不会改变原数组
var colors1 = ["red", "green"];
var colors2 = colors1.concat("blue", [1,2,3])
console.log(colors2);    //  ["red", "green", "blue", 1, 2, 3]


// splice()三种用法

// 删除
var arr = [1,2,3,4,5];
arr.splice(0, 2);    // 第一个参数是起始位置，第二个参数是count
console.log(arr);    // [3, 4, 5]

// 插入
var arr = [1,2,3,4,5];
arr.splice(2, 0, "aaa");  // 第二个参数是要替换的项数
console.log(arr);    // [1, 2, "aaa", 3, 4, 5]

// 替换
var arr = [1,2,3,4,5];
arr.splice(2, 2, "aaa");
console.log(arr);          // [1, 2, "aaa", 5]

// 总结一下，第一个参数是起始位置，第二个参数是要删除的count，后面的参数是要插入的内容，可以有多项



// -=-=-=-=-=-=-=-=-=-= 位置方法 -=-=-=-=-=-=-=-=-=-=

// indexOf(), lastIndexOf(), 分别从头和尾找索引
var arr = [1,2,32,1];
console.log(arr.indexOf(1));      // 0
console.log(arr.lastIndexOf(1));  // 3



// -=-=-=-=-=-=-=-=-=-= 迭代方法 -=-=-=-=-=-=-=-=-=-=

// 这5个方法的参数都是一个函数
// every(), 返回true或false。每一项都是true，则返回true。
// some(), 返回true或false。存在一项是true，则返回true
// map(), 对每一项，返回函数调用结果组成的数组
// filter(), 返回函数返回true的项组成的数组
// forEach(), 对每一项，运行函数，没有返回值

// -=-=-=-=-=-=-=-=-=-= 归并方法 -=-=-=-=-=-=-=-=-=-=
// reduce(), reduceRight() 两个方向相反
// 固定的四个参数：pre, cur, index, array
var arr = [1,2,3,4,5,100];
var sum = arr.reduce((pre, cur, index, array) => pre + cur);
console.log(sum);    // 115
