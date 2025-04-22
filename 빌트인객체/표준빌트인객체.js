//자바스크립트는
//Object, String, Number, Boolean, Symbal, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet,
//Function, Promise, Reflect, Proxy, JSON, Error 등 40 여 개의 표준 빌트인 객체를 제공

//Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다.

//String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee"); //String {"Lee"}
console.log(typeof strObj); //object

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); //Number {1.5}
console.log(typeof numObj); //object

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); //Boolean {true}
console.log(typeof boolObj); //object

//Function 생성자 함수에 의한 Function 객체 생성
const func = new Function("x", "return x * x"); //f anonymous(x )
console.log(typeof func); //function

//Array 생성자 함수에 의한 Array 객체 생성
const arr = new Array(1, 2, 3); // (3)[1, 2, 3]
console.log(typeof arr); // object

//RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); //object

//Date 생성자 함수에 의한 Date 객체 생성
const date = new Date(); // Fri May ~
console.log(typeof date); // object

//String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은  String.prototype 이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true

//Number의 프로퍼티에 바인딩된 객체 Number.prototype은 다양한 기능의 빌트인 프로토타입 메서드를 제공
//toFixed는 Number.prototype의 프로토타입 메서드다.
console.log(numObj.toFixed()); // 2

//isInteger는 Number의 정적 메서드다.
//Number.isInteger는 인수가 정수인지 검사하여 결과를 Boolean으로 반환
console.log(Number.isInteger(0.5)) // false