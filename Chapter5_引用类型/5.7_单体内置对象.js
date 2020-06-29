// 内置对象：在ECMAscript程序执行前就已经实例化好了的对象。包括Object, String, Math等

// -=-=-=-=-=-=-=-=-=-= Global -=-=-=-=-=-=-=-=-=-=

// 实际上所有全局作用域中的属性和函数都是Global对象的属性和方法，如isNaN(), parseInt()等
// Global还有encodeURI(), encodeURIComponent()。前者不会对URI特殊字符编码，后者会对所有字符编码

// 在web浏览器环境中，window对象就是Global对象，且附加了浏览器的专有属性

// -=-=-=-=-=-=-=-=-=-= url编码方法

var uri = "https://www.leosirius.com/?name=leo&age=24"
alert(encodeURI(uri));            // https://www.leosirius.com/?name=leo&age=24
alert(encodeURIComponent(uri));   // https%3A%2F%2Fwww.leosirius.com%2F%3Fname%3Dleo%26age%3D24

// 一般来说encodeURIComponent()是用来对uri中的一个片段进行编码。

// 对应的有decodeURI()和decodeURIComponent()

// -=-=-=-=-=-=-=-=-=-= eval()

// 这个方法就是一个ECMAscript解析器，参数就是ECMAscript字符串
eval("alert('hello');");   // hello

// -=-=-=-=-=-=-=-=-=-= Math对象 -=-=-=-=-=-=-=-=-=-=

// 一些数学常量和计算在Math对象中
alert(Math.PI);           // 3.141592653589793
alert(Math.round(3.14));  // 3

