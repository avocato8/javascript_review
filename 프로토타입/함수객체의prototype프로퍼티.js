//함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입
//함수 객체는 prototype 프로퍼티를 소유
(function () {}).hasOwnProperty("prototype"); // true

//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty("prototype"); // false

//화살표함수, 메서드 축약 표현으로 정의한 메서드는 non-constructor로, prototype 프로퍼티를 소유하지 않는다.
//프로토타입도 생성하지 않는다.
const Person = (name) => {
  this.name = name;
};
console.log(Person.hasOwnProperty("prototype")); // false
console.log(Person.prototype); //undefined

const obj = {
  foo() {},
};
console.log(obj.foo.hasOwnProperty("prototype")); // false
console.log(obj.foo.prototype); // undefined

function Person2(name) {
  this.name = name;
}
const me = new Person("Lee");
console.log(Person.prototype === me.__proto__); // true

//프로토타입의 constructor 프로퍼티와 생성자 함수
//모든 프로토타입은 constructor 프로퍼티를 갖는다.
//constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 기리킨다.

//생성자함수
function Person3(name) {
  this.name = name;
}
const me3 = new Person('Lee');
//me3 객체의 생성자 함수는 Person3다.
console.log(me3.constructor === Person3); // true 
