//Rest파라미터는 매개변수 앞에 세개의 점 ...을 붙여서 정의한 매개변수
//Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // [1, 2, 3, 4, 5]
}

foo(1, 2, 3, 4, 5);

//일반 매개변수와 Rest 파라미터는 함께 사용 가능하다.
function foo1(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [2, 3, 4, 5]
}

foo1(1, 2, 3, 4, 5);

//Rest 파라미터는 반드시 마지막 파리미터야 하고, 단 하나만 선언할 수 있다.
//Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
function foo2(...rest) {}
console.log(foo2.length); // 0

//Rest 파라미터와 arguments 객체
//ES5에서는 함수를 정의할 떄 매개변수의 개수를 확정할 수 없는 가변 인자 함수의 경우
//매개변수를 통해 인수를 전달받는 것이 불가능하므로 arguments 객체를 활용하여 인수를 전달받음
//arguments 객체는 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능항 유사 배열 객체이고 함수 내부에서 지역 변수처럼 사용가능
function sum() {
  //유사 배열 객체인 arguments 객체를 배열로 변환
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//ES6에서는 rest 파리미터를 사용하여 인수 함수의 인수 목록을 배열로 직접 전달받을 수 있다.
function sum1(...args) {
  //Rest 파리미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5));
//화살표 함수에서는 arguments 객체를 갖지 않기 때문에, 가변 인자 함수를 구현할 때는 반드시 Rest 파리미터를 사용용