//코드는 전역과 지역(함수 몸체 내부)으로 구분할 수 있다.
//이 떄 변수는 자신이 선언된 위치(전역 또는 지역)에 따라
//자신이 유효한 범위인 스코프가 결정된다.

var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    var x = "inner's local x";
    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }
  inner();
}
outer();
console.log(x); //global x
console.log(z); //ReferenceError

//스코프는 함수의 중첩에 의해 계측적 구조를 갖는다.
//변수를 첨조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며
//선언된 변수를 검색한다.

//스코프 체인은 물리적인 실체로 존재한다.
//자바스크립트 엔진은 코드를 실행하기에 앞서 렉시컬 환경을 실제로 생성한다.

//스코프 체인에 의한 함수 검색
function foo(){
    console.log('global function foo');
}

function bar(){
    //중첩 함수
    function foo(){
        console.log('local function foo');
    }
    foo();
}
bar();
//일반 변수처럼 함수도 스코프에 따라 검색
//따라서 스코프는 식별자를 검색하는 규칙이라고 표현하는 것이 좋다.