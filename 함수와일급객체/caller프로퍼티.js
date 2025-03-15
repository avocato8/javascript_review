//caller프로퍼티는 ECMAScript 사양에 포함되지 않는 비표준 프로퍼티다.
//함수 객체의 caller프로퍼티는 함수 자신을 호출한 함수를 가리킨다.
function foo(func) {
  return func();
}
function bar() {
  return "caller :" + bar.caller;
}

//브라우저에서 실행한 결과과
console.log(foo(bar)); //caller : function foo(func) {...}
console.log(bar()); //caller : null
