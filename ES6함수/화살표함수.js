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

//화살표 함수와 일반 함수의 차이
//1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다.
const Foo = () => {};
Foo.hasOnwProperty("prototype"); // false

//2. 중복된 매개변수 이름을 선언할 수 없다.
//일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
//화살표 함수에서 중복된 매겨변수 이름을 선언하면 에러가 발생한다.

//3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
//따라서 화살표 함수 내부에서 this, arguments, super, new.target을 참조하면 스코프 체인을 통해
//상위 스코프의 this, arguments, super, new.target을 참조한다.

//this
//화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 this이다.
//this는 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    });
  }
}
