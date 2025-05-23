//빈 객체의 생성
const person = new Object();

//프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi: My name is " + this.name);
};

console.log(person); // {name: 'Lee', sayHello: f}
person.sayHello(); // Hi! My name is Lee

//생성자함수(constructor)란 new 연산자와 함께 호출하여
//객체를 생성하는 함수
//생성자 함수에 의해 생성된 객체를 인스턴스라고 한다.

//자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date RegExp, Promise
//등의 빌트인 생성자 함수를 제공

const strObj = new String("Lee");
console.log(typeof strObj); //object
console.log(strObj); // String {"Lee"}

const numObj = new Number(123);
console.log(typeof numObj); //object
console.log(numObj); // Number {123}

const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // Boolean {true}

const func = new Function('x', 'return x + x');
console.log(typeof func); // function
console.dir(func); // f anonymous(x)

const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1, 2, 3]

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

const date = new Date();
console.log(typeof date); //object
console.log(date); // Mon May ~