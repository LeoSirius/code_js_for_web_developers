// 两种创建对象等价的方法
var obj = new Object();
var obj = {};             // 对象字面量

// 对象字面量也是向函数传递大量可变参数的首选方式

function displayInfo(args) {
  var output = "";

  if (typeof args.name == "string") {
    output += "Name: " + args.name + "\n";
  }

  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }

  console.log(output);
}

displayInfo({
  name: "leo sirius",
  age: 24
});

displayInfo({
  name: "Greg"
})