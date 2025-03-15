//obj 객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();
console.log(obj.constructor === Object); // true

//add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function("a", "b", "return a + b");
console.log(add.constructor === Function); // true

//생성자 함수
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
console.log(me.constructor === Person); // true

//객체 리터럴
const obj2 = {};
//함수 리터럴
const add2 = function (a, b) {
  return a + b;
};
//배열 리터럴
const arr2 = [1, 2, 3];
//정규 표현식 리터럴
const regexp = /is/ig;

console.log(obj.constructor === Object); // true
//내부적으로 Object.prototype을 프로토타입으로 갖는 객체를 생성

//Object 생성자 함수에 의한 객체 생성
//인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate 를 호출하여 빈 객체를 생성
let obj3 = new Object();
console.log(obj3); // {}

//인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입
class Foo extends Object{}
new Foo(); // Foo {}

//인수가 전달된 경우에는 인수를 객체로 변환
obj3 = new Object(123);
console.log(obj); // Number {123}
obj3 = new Object('123');
console.log(obj); //String {"123"}