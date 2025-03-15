//모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입,
//즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

//1. __proto__ 는 접근자 프로퍼티다.
const obj = {};
const parent = { x: 1 };

//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

//setter함수인 set __proto__가 호출되어 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x); // 1

//2. __proto__ 접근자 프로퍼티는 상속을 통해 사용
const person = { name: "Lee" };

//person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty("__proto__")); // false

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype 의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {get: f, set: f, enumerable: false, configurable: true}

//모든 객체는 Object.prototype 의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype);

//3. __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
//상호 참조에 의해 프로토타입 체인이 생성되는 것을 받지
const parent2 = {};
const child2 = {};

//child의 프로토타입을 parent로 설정
child2.__proto__ = parent2;
//parent의 프로토타입을 child 로 설정
parent2.__proto__ = child2; // typeError
//프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.

//__proto__ 접근자 프로퍼티를 코드 내에서 사용하는 것은 권장하지 않는다.
//obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);
console.log(obj.__proto__); //undefined

//따라서 __proto__보다는 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj));