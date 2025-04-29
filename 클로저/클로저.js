//클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();

//outerFunc 함수 내부에서 중첩 함수 innerFunc가 정의되고 호출되었다. 이 때 중첩 함수 innerFunc의 상위 스코프는 외부 함수 outerFunc의  스코프다.
//따라서 중첩 함수 innerFunc 내부에서 자신을 포함하고 있는 외부 함수 outerFunc의 x변수에 접근할 수 있다.

//만약 innerFunc 함수가 outerFunc 함수의 내부에서 정의된 중첩함수가 아니라면 innerFunc를 outerFunc 함수의 내부에서 호출한다고 하더라고 outerFunc 함수의 변수에 접근할 수 없다.
const x2 = 1;

function outerFunc() {
  const x2 = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x2); // 1
}
outerFunc();

//이 같은 현상이 발생하는 이유는 자바스크립트가 렉시컬 스코프를 따르는 프로그래밍 언어이기 때문이다.