//스코프(유효범위)는 자바스크립트를 포함한 모든 프로그래밍 언어의 기본적이며
//중요한 개념이다.

//함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는
//참조할 수 없다.
function add(x, y) {
  console.log(x, y);
  return x + y;
}

add(2, 5);
// console.log(x, y); //ReferenceError, 참조 불가

var var1 = 1;
if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;
  function bar() {
    var var5 = 5;
  }
}
console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // ReferenceError
// console.log(var5); // ReferenceError

//변수는 자신이 선언된 위치에 의해 자신이 유효한 범위,
//즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정

//식별자 이름이 동일하지만 스코프가 다른 별개의 변수
var x = "global";
function foo() {
  var x = "local";
  console.log(x); // local
}
foo();
console.log(x); // global
//자바스크립트 엔진이 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지
//결정 - 식별자 결정
//스코프랑 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙

//var 키워드로 선언한 변수의 중복선언
function foo(){
    var x= 1;
    var x= 2;
    console.log(x); // 2
}
function bar(){
    let x = 1;
    // let x = 2; // 중복 선언 불가
}