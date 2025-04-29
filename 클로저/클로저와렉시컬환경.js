const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

//outer함수를 호출하면 중첩 함수 inner를 반환한다.
//그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer();
innerFunc();

//그러나 이 코드의 실행 결과는 outer함수의 지역 변수 x의 값인 10이다.
//이미 생명 주기가 종료되어 실행 컨텍스트 스택에서 제거된 outer 함수의 지역 변수x가 동작중이다.

//이처럼 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다.
//이러한 중첩 함수를 클로저라고 한다.

//클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.