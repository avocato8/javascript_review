//어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 부수 효과가 없는 함수를
//순수함수

//외부 상태에 의존하거나 외부 상태를 변경하는, 부수 효과가 있는 함수를
//비순수함수
//외부 상태에는 전역 변수, 서버 데이터, 파일, Console, DOM 등이 있다.

var count = 0;

//순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환
function increase(n) {
  return ++n;
}

//순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

//비순수 함수
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경
}
//상태 변화를 추적하기 어려워지며, 비순수 함수를 최대한 줄이는게 좋다.
