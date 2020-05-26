// js函数的参数实际上是一个数组

function howManyArgs () {
  console.log(arguments.length);
}

howManyArgs("string", 45);  // 2
howManyArgs(0);             // 1
howManyArgs();              // 0

// 由于js函数参数的特点，js没有函数重载
