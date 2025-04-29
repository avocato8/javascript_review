//클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.
//상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고
//특정 함수에게만 상태 변경을 허용하기 위해 사용

//카운트 상태 변수
let num = 0;

//카운트 상태 변경 함수
const increase = function () {
  //카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());

//카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
//이를 위해 카운트 상태는 increase 함수만이 변경할 수 있어야 한다.

//따라서 클로저를 사용해서,
//카운트 상태 변경 함수(클로저)
const increase2 = (function () {
  //카운트 상태 변수
  let num = 0;

  //클로저
  return function () {
    return ++num;
  };
})();

console.log(increase2());
console.log(increase2());
console.log(increase2());

//즉시 실행 함수는 호출된 이후 소멸되지만 즉시 실행 함수가 반환한 클로저는 increase 변수에 할당되어 호출된다.
//이 때 즉시 실행 함수가 반환한 클로저는 자신이 정의된 위치에 의해 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.
//따라서 즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유 변수 num을 언제 어디서 호출하든지 참조하고 변경할 수 있다.

//이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하기 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용