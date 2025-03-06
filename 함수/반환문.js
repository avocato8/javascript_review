function multiply(x, y) {
  return x * y; //반환문
  console.log("실행되지 않는다.");
}

var result = multiply(3, 5);
console.log(result);

function foo() {
  return;
}
console.log(foo()); // undefined