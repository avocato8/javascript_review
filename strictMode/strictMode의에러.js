//1. 암묵적 전역
(function () {
  "use strict";
  x = 1;
  console.log(x); //ReferenceError
})();

//2. 변수, 함수, 매개변수의 삭제
(function () {
  "use strict";
  var x = 1;
  delete x; //SyntaxError

  function foo(a) {
    delete a; // SyntaxError
  }
  delete foo; //SyntaxError
})();

//3. 매개변수 이름의 중복
(function () {
  "use strict";

  //Syntax Error
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
});
