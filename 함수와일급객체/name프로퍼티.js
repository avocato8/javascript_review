//함수 객체의 name 프로퍼티는 함수 이름
//ES5이전은 비표준이었다가 ES6에서 표준
//ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖는다.
//ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

//기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

//익명 함수 표현식
var anonymousFunc = function () {};
//ES5 : name 프로퍼티는 빈 문자열을 값으로 갖는다.
//ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymouseFunc

//함수 선언문
function bar() {}
console.log(bar.name); // bar
