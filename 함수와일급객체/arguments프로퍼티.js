//arguments 프로퍼티
//함수 객체의 arguments 프로퍼티 값은 arguments 객체다.
//arguments 객체는 함수 호출시 전달된 인수들의 정보를 담고 있는
//순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용
//즉 함수 외부에서는 참조 불가
//ES3에서 표준에서 폐지되어, Functions.arguments는 권장하지 않고
//함수 내부에서 지역 변수처럼 사용할 수 있는 arguments 객체를 참조
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}
console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));
//선언된 매개변수의 개수보다 인수를 적게 전달했을 경우 인수가 전달되지 않는
//매개변수는 undefined로 초기화된 상태를 유지
//매개변수의 개수보다 인수를더 많이 전달한 경우 초과된 인수는 무시
//초과된 인수가 그냥 버려지는 건 아니고
//모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관

//arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 떄 유용
function sum() {
  let res = 0;

  //arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로
  //for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
//arguments 객체는 배열 형태로 인자 정보를 담고 있지만
//실제 배열이 아닌 유사 배열 객체다.
//유사 배열 객체는 배열이 아니므로 배열 메서드를 사용할 수 없다.
//배열 메서드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해
//간접 호출해야 한다.
function sum1() {
  //arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum1(1, 2));
console.log(sum1(1, 2, 3, 4, 5));
//이러한 번거로움을 해결하기 위해 ES6에서는 Rest 파라미터를 도입
function sum2(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4, 5));
