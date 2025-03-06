//---------------즉시 실행 함수---------------
//함수 정의와 동시에 실행되는 함수
// 반드시 그룹 연산자 () 로 감싸야 한다.

//익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

//기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();
foo(); //ReferenceError

//즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
console.log(res); // 15

//---------------재귀 함수---------------
//함수가 자기 자신을 호출하는 것
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);

//반복문을 사용하지 않고 재귀함수로 해도 된다.
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); // 재귀 호출
}
countdown(10);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(2)); // 2! = 2 * 1 = 2
//만약 탈출 조건이 없으면 함수가 무한 호출되어 스택 오버플로 에러가 발생
//따라서 재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 떄만 한정적으로 사용

//---------------중첩 함수---------------
//함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수
//그리고 중첩 함수를 퐇마하는 함수는 외부 함수
function outer() {
  var x = 1;

  function inner() {
    var y = 2;
    //외부 함수의 변수를 참조할 수 있다.
    console.log(x + y);
  }
  inner();
}
outer();
//중첩 함수는 스코프와 클로저에 깊은 관련이 있다.

//---------------콜백 함수---------------
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}
repeat(5); // 0 1 2 3 4
//repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
var logAll = function (i) {
  console.log(i);
};
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
//반복 호출할 함수를 인수로 전달
repeat(5, logAll); // 0 1 2 3 4
repeat(5, logOdds); // 1 3

//이처럼 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수
// 매개 변수를 통해 함수의 외부에서 전달받은 함수를 고차 함수(HOF)
// 고차 함수는 콜백 함수를 자신의 일부분으로 합성

//콜백 함수가 고차 함수 내부에서만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3
//콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면
//함수 외부에서 콜백 함수를 정의한 후 고차 함수에 전달하는 것이 효율적
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat(5, logOdds); // 1 3
//비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등) 에 사용되는 중요한 패턴이다!!

//콜백 함수는 비동기 처리뿐 아니라 배열 고차 함수에서도 사용
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});
console.log(res); // [2, 4, 6]

res = [1, 2, 3].filter(function (item) {
  return item % 2;
});
console.log(res); // [1, 3]

res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(res); // 6
