//함수 객체의 length 프로퍼티는 함수를 정의할 떄 선언한 매개변수의 개수
function foo() {
  console.log(foo.length); // 0
}

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
//arguments 객체의 length 프로퍼티는 argument(인자)의 개수
//함수 객체의 length 프로퍼티는 매개변수의 개수수