// 对string，number和boolean。在调用这些类型实例的方法时，会自动创建一个临时的包装类型
var s1 = "leosirius";
var s2 = s1.substr(0, 2);

// 实际上相当于
var s1 = new String("leosirius");
var s2 = s1.substr(0, 2);
s1 = null;

alert(s2);

// -=-=-=-=-=-=-=-=-=-=
// 另外注意new一个包装类型和直接进行类型转换是不同的
var value = "25";
var num = Number(value);        // 转型函数
alert(typeof num);        // number

var obj = new Number(value);    // 构造函数
alert(typeof obj);        // object

// -=-=-=-=-=-=-=-=-=-= Boolean -=-=-=-=-=-=-=-=-=-=

// 建议永远不要使用Boolean的包装类型，容易造成误解。
// Boolean的实例是对象，拥有和对象一样的性质

var falseObject = new Boolean(false);
alert(falseObject && true);    // 这里的结果是true，因为falseObject是对象，而所有对象都会被判断为true

// -=-=-=-=-=-=-=-=-=-= Number -=-=-=-=-=-=-=-=-=-=

// 用Boolean，Number也不建议用。
// toString()，参数指定进制
var num = 10;
alert(num.toString());    // 10
alert(num.toString(2));   // 1010
alert(num.toString(8));   // 12
alert(num.toString(10));  // 10
alert(num.toString(16));  // a

// toFixed()，参数指定小数位数。
alert(num.toFixed(2));   // 10.00
var num2 = 10.005
alert(num.toFixed(2));   // 10.00

// 还有toExponential(), toPrecision()等

// -=-=-=-=-=-=-=-=-=-= String -=-=-=-=-=-=-=-=-=-=

// charAt()类似[]
// charCodeAt() 返回ascii字符编码
var str = "hello world";
alert(str.charAt(1));       // e
alert(str.charCodeAt(1));   // 101

// -=-=-=-=-=-=-=-=-=-= 字符串操作方法

// concat拼接字符串，注意不改变原字符串
// slice, substr, substring切片字符串，注意参数意义不同
// indexOf(), lastIndexOf()返回位置
// trim()删除空格

// fromCharCode()是一个静态方法。把字符编码转换成字符串
alert(String.fromCharCode(104, 101, 108, 108, 111));  // hello


