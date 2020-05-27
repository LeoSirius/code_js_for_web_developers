// 第三章讲的五种基本类型是按值访问，对象类型则是按引用访问。

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Leo";
console.log(obj2.name);    // Leo

// 五种基本类型用typeof都能很好的检测，但对于对象类型，我们不仅想知道它是对象类型
// 还想知道它是属于什么类的对象，这时用instanceof