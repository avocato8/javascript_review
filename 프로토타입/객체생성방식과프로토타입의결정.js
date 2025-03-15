//1. 객체 리터럴에 의해 생성된 객체의 프로토타입
const obj = { x: 1 };
//객체 리터럴이 평가되면 추상 연산 OrdinaryObjectCreate에 의해
//Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결

//객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

//2. Object 생성자 함수에 의해 생성된 객체의 프로토타입입
const obj2 = new Object();
obj2.x = 1;

//Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj2.constrcutor === Object); // true
console.log(obj2.hasOwnProperty("x")); // true

//3. 생성자 함수에 의해 생성된 객체의 프로토타입
function Person(name) {
  this.name = name;
}
//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};
const me = new Person("Lee");
const you = new Person('Kim');

me.sayHello(); // Hi! My name is Lee
you.sayHello(); // Hi! My name is Kim
