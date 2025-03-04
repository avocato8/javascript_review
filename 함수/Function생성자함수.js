var add = new Function("x", "y", "return x + y");

console.log(add(2, 5)); // 7

//Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않다.
//Function 생성자함수로 생성한 함수는 클로저를 생성하지 않는 등, 이상함.

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
}());
console.log(add1(1, 2)); // 13

var add2 = (function() {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());
console.log(add2(1, 2)); // ReferenceError: a is not defined