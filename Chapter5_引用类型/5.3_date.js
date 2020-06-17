// 下面四个例子。Date构造函数返回的是date对象
// Date.parse()和Date.UTC()返回的是时间毫秒

var d1 = Date.parse("2020 01 01");
console.log(d1);         // 1577808000000

var dateObj1 = Date("2020 01 01");
console.log(dateObj1);   // "Wed Jun 17 2020 09:09:03 GMT+0800 (China Standard Time)"

var d3 = Date.UTC(2020, 01, 01);
console.log(d3);         // 1580515200000

var dateObj2 = Date(2020, 01, 01);
console.log(dateObj1);   // "Wed Jun 17 2020 09:10:04 GMT+0800 (China Standard Time)"