//화살표 함수는 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용

//함수 정의
const multiply = (x, y) => x * y;
multiply(2, 3); // 6

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
Foo.hasOwnProperty("prototype"); // false

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

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));
//이 예제를 실행했을 떄 기대하는 결과는 ['-webkit-transition', '-webkit-user-select']이다.
//하지만 TypeError가 발생한다.

//콜백 함수에서 this는 undefined를 가리킨다.
//일반 함수로서 호출되는 모든 함수 내부의 this는 전역 객체를 가리킨다.
//따라서 this를 회피시킨 후에 콜백 함수 내부에서 사용해야 한다.

// add(arr){
//   const that = this;
//   return arr.map(function(item){
//     return that.prefix + ' ' + item;
//   })
// }

// 2. ES5에서 도입된 Arry.prototype.map은 this문제를 해결하기 위해
// 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
// add(arr){
//   return arr.map(function(item){
//     return this.prefix + ' ' + item;
//   }, this);
// }

//3. Function.prototype.bind 메서드를 사용하여 prefixer 객체를 가리키는
//this를 바인딩한다.
// add(arr){
//   return arr.map(function(item){
//     return this.prefix + ' ' + item;
//   }.bind(this))
// }

//ES6에서는 화살표 함수를 사용하여 콜백 함수 내부의 this문제를 해결할 수 있다.
class Prefixer2 {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer2 = new Prefixer2("-webkit-");
console.log(prefixer2.add(["transition", "user-select"]));

//화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
//따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의
//this를 그대로 참조한다. 이를 lexical this라 한다.

//만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this 바인딩이 없으므로
//스코프 체인 상에서 가장 가장 가까운 상위 함수 중에서 화살표 함수가 아닌
//함수의 this를 참조한다.
(function () {
  const foo = () => console.log(this);
  foo();
}).call({ a: 1 }); //{ a: 1 }

(function () {
  const bar = () => () => console.log(this);
  bar()();
}).call({ a: 1 }); // { a: 1 }

//프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 주에서
//화살표 함수가 아닌 함수의 this를 참조한다.
const counter = {
  num: 1,
  increase: () => ++this.num,
};
console.log(counter.increase());

//화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에
//Function.prototype.call, Function.prototype.apply, Function.prototype.bind
//메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없다.
window.x = 1;
const normal = function () {
  return this.x;
};
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 })); // 1

//메서드를 화살표함수로 정의하면 안된다.
const person2 = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};
person2.sayHi(); // Hi (this는 전역객체)

const person3 = {
  name: "Lee",
  sayHi() {
    console.log(`Hi ${this.name}`); //Es6 메서드를 이용하도록
  },
};
person3.sayHi(); // Hi Lee

//프로퍼티를 동적 추가할 때는 ES6 메서드 정의를 사용할 수 없으므로 일반 함수 할당
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

//클래스 필드에 화살표 함수를 할당하면 프로토타입 메서드가 아니라 인스턴스 메서드가 되므로,
//ES6 메서드를 꼭 사용하자

//super
//화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다.
//따라서 화살표 함수 내부에서 super를 참조하면 this와 마찬가지고 상위 스코프의 super를 참조한다.
class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  //화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  sayHi = () => `${super.sayHi()} how are you doing?`;
}
const derived = new Derived("Lee");
console.log(derived.sayHi()); //Hi! Lee how are you doing?

//arguments
//화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 arguments를 참조하면
//this와 마찬가지로 상위 스코프의 arguments를 참조한다.
(function () {
  //화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
  const foo = () => console.log(arguments); //[Arguments] {'0': 1, '1': 2}
  foo(3, 4);
})(1, 2);
//전역에는 arguments 객체가 존재하지 않는다.
const foo = () => console.log(arguments);
foo(1, 2); //ReferenceError: arguments is not defined
