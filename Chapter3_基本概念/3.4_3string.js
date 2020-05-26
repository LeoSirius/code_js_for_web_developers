// 两种方法转换为字符串
// - obj.toString()
// - String()

// 注意null和undefine没有toString()方法。但是可以用String(null), String(undefined)

// Object的每个实例都有的属性和方法
// - constructor
// - hasOwnProperty(propertyName), 参数是属性名的字符串
// - propertyIsEnumerable(propertyName), 参数是属性名的字符串
// - isPrototypeOf()
// - toString()
// - toLocaleString()
// - valueOf()

// 在表达式取值的时候，通常会调用valueOf()和toString()
