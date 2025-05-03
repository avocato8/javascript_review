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

//카운터 상태를 감소시킬 수 있도록 수정
const counter = (function () {
  //카운터 상태 변수
  let num = 0;

  //클로저인 메서드를 갖는 객체를 반환한다.
  //객체 리터럴은 스코프를 만들지 않는다.
  //따라서 아래 메서드들의 상위 스코프는 즉실 실행 함수의 렉시컬 환경이다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); //1
console.log(counter.increase()); //2

console.log(counter.decrease()); //1
console.log(counter.decrease()); //0

//위 예제를 생성자 함수로 표현하면,
const Counter = (function () {
  //카운트 상태 변수
  let num = 0;

  function Counter() {
    //프로퍼티는 public 하므로 은닉되지 않는다.
    //this.num = 0;
  }

  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };
  return Counter;
})();

const counter1 = new Counter();
console.log(counter1.increase());
console.log(counter1.increase());

console.log(counter1.decrease());
console.log(counter1.decrease());

//함수형 프로그래밍에서 부수 효과를 최대한 억제하기 위해
//클로저는 적극적으로 사용한다.

//이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(aux) {
  //카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  //클로저를 반환
  return function () {
    //인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
}

//보조 함수
function increase3(n) {
  return ++n;
}
function decrease3(n) {
  return --n;
}

//함수로 함수를 생성한다.
//makeCounter함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase3);
console.log(increaser()); // 1
console.log(increaser()); // 2

//increaser 함수와는 별개로 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease3);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

//makeCounter함수는 보조 함수를 인자로 전달받고 함수를 반환하는 고차 함수다. makeCounter함수가 반환하는 함수는
//자신이 생성됐을 때의 렉시컬 환경인 makeCounter함수의 스코프에 속한 counter변수를 기억하는 클로저다.

//makeCounter함수를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된 렉시컬 환경을 갖는다.
//따라서 독립된 카운터가 아니라 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다.(makeCounter 함수를 두번 호출하지 말아야 한다.)

//함수를 반환하는 고차 함수
//이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환
const counter2 = (function () {
  //카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  //함수를 인수로 전달받는 클로저를 반환
  return function (aux) {
    //인수로 전달받은 보조 함수에 상태 변경을 위임
    counter = aux(counter);
    return counter;
  };
})();

//보조 함수
function increase4(n) {
  return ++n;
}
function decrease4(n) {
  return --n;
}

//보조 함수를 전달하여 호출
console.log(counter2(increase4));
console.log(counter2(increase4));

console.log(counter2(decrease4));
console.log(counter2(decrease4));
