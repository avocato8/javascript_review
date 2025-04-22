//1. 일반 함수의 this
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.
//일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.
(function () {
  "use strict";

  function foo() {
    console.log(this);
  }
  foo();

  function Foo() {
    console.log(this);
  }
  new Foo();
})();

//2. arguments 객체
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function (a) {
  "use strict";
  //매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  //변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments);
})(1);
