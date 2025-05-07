//ES6에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
const obj = {
  x: 1,
  //foo는 메서드다.
  foo() {
    return this.x;
  },
  //bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

//ES6메서드는 인스턴스를 생성할 수 없는 non-constructor이다. 따라서 생성자 함수로서 호출할 수 없다.
new obj.foo(); // TypeError
new obj.bar(); // bar {}

//obj.foo는 ES6메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty("prototype"); // false
//obj.bar는 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty("prototype"); // true

//ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.
//super 참조는 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로
//ES6 메서드는 super 키워드를 사용할 수 있다.

const base = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    return `${super.sayHi()}. how are you doing`;
  },
};

console.log(derived.sayHi());
