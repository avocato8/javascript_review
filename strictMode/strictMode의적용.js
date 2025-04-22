//strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 를 추가한다.

"use strict";
function foo() {
  x = 10; //ReferenceError
}
foo();

//전역과 함수 단위로 strict mode를 적용하는 것을 피하자.
//즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직직
(function () {
  "use strict";
  //do something...
});
