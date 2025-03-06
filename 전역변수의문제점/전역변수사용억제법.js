//즉시 실행 함수
//모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function () {
  var foo = 10;
})();
console.log(foo); //ReferenceError

//네임스페이스 객체
//전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를
//프로퍼티로 추가
var MYAPP = {};
MYAPP.name = "Lee";
console.log(MYAPP.name); //Lee
//네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서
//네임스페이스를 계층적으로 구성
MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};
//네임스페이스 객체가 전역 변수에 할당되므로 그다지 유용하지는 않다.

//모듈 패턴
//클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
//클로저를 기반으로 동작
var Counter = (function () {
  //private 멤버
  var num = 0;

  //public 멤버
  //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

//ES6 모듈
//ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다.
//ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
//script 태그에 type='module' 어트리뷰트를 추가하면 자바스크립트 파일은 모듈로서 동작한다.
//<script type="module" src="lib.mjs"></script>
// ES6 모듈은 구형 브라우저에서는 동작하지 않으며,
//webpack 등의 모듈 번들러를 사용하는 것이 일반적