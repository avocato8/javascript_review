// var 키워드로 선언한 전역 변수와 전역 함수, 선언하지 않는 변수에 값을 할당한 암묵적 전역
// 은 전역객체 window의 프로퍼티가 된다.
// 전역 객체의 프로퍼티를 참조할 떄 window를 생략할 수 있다.

//전역 변수
var x = 1;
//암묵적 전역
y = 2;
//전역 함수
function foo(){}

console.log(window.x); // 1
console.log(x); // 1

console.log(window.y); //2
console.log(y); // 2

console.log(window.foo); // f foo(){}
console.log(foo); // f foo(){}

// let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
