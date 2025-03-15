//1. Object.create에 의한 직접 상속
//Object.create 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성
//Object.create 메서드도 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate를 호출

//Object.create 메서드의 첫 번째 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체를 전달
//두번쨰 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달

//프로토타입이 null인 객체를 생성
//생성된 객체는 프로토타입 체인의 종점이 위치
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
//Object.prototype을 상속받지 못한다.
console.log(obj.toString());

//obj -> Object.prototype -> null
// obj = {}; 와 동일일
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj -> Object.prototype -> null
// obj = { x: 1 }; 와 동일
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

//obj -> myProto -> Object.prototype -> null
const myProto = { x: 10 };
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto); // true

//생성자함수
function Person(name) {
  this.name = name;
}
//obj -> Person.prototype -> Object.prototype -> null
//obj = new Person('Lee'); 와 동일
obj = Object.create(Person.prototype);
obj.name = "Lee";
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); //

//Object.create 메서드는 첫 번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성하면서
// 직접적으로 상속을 구현
// 이 메서드의 장점에는
//  new 연산자가 없이도 객체 생성 가능
//  프로토타입을 지정하면서 객체 생성 가능
// 객체 리터럴에의해 생성된 객체도 상속가능

//Object.create 메서드를 통해 프로토타입 체인의 종점에 위치하는 객체를 생성할 수 있어
//Object.prototype 빌트인 메서드를 객체가 직접 호출하는 것을 권장하지 않는다.
const obj2 = Object.create(null);
obj.a = 1;

// console.log(obj.hasOwnProperty('a')); // TypeError
console.log(Object.prototype.hasOwnProperty.call(obj, "a"));

//2. 객체 리터럴 내부에서 __proto__에 의한 직접 상속
const myProto2 = { x: 10 };

//객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속속
const obj = {
  y: 20,
  //객체를 직접 상속받는다.
  //obj -> myProto -> Object.prototype -> null
  __proto__: myProto2,
};

console.log(obj.x, obj.y); // 10, 20
console.log(Object.getPrototypeOf(obj) === myProto2); // true
