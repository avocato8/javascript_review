//화살표 함수는 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용

//함수 정의
const multiply = (x, y) => x * y;
multiplay(2, 3); // 6

const power = (x) => x ** 2;
power(2); // 4

//객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호()로 감싸 주어야 한다.
const create = (id, content) => ({ id, content });
// const create = (id, content) => {
//   return { id, conetent };
// }; 이것과 동일
create(1, "Javascript"); //{id: 1, content: "Javascript"}

//화살표 함수도 즉시 실행 함수로 사용할 수 있다.
const person = (name) =>
  ({
    sayHi() {
      return `Hi? My name is ${name}.`;
    },
  }("Lee"));

//화살표 함수도 일급 객체이므로 Array.prototype.map, Array.prototype.filter, Array.prototype.reduce 같은 고차 함수에
//인수로 전달할 수 있다.

//ES5
[1, 2, 3].map(function (v) {
  return v * 2;
});
//ES6
[1, 2, 3].map((v) => v * 2); // [2, 4, 6]
