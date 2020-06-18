// 对string，number和boolean。在调用这些类型的方法时，会自动创建一个临时的包装类型
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