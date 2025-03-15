function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');

//hasOwnProperty는 object.prototype의 메서드다.
console.log(me.hasOwnProperty('name')); // true
//me 객체가 Person.prototype 뿐만 아니라 Object.prototype도 상속 받았음을 의미

Object.getPrototypeOf(me) === Person.prototype; // true

//Person.prototype의 프로토타입은 Object.prototype이다.
//프로토타입의 프로토타입은 언제나 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // true 

//자바스크립트는 객체의 프로퍼티에 접근하려고 할 떄 해당 객체에 접근하려는 프로퍼티가 없다면
//[[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는
//프로토타입의 프로퍼티를 순차적으로 검색
//이를 프로토타입 체인이라고 한다.

//프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototpye을 상속받는다.
//Object.prototype을 프로토타입 체인의 종점이라고 한다.