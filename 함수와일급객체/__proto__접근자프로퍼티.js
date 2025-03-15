//모든 객체는 [[prototype]] 이라는 내부 슬롯을 갖는다.
//[[prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
//__proto__프로퍼티는 [[prototype]] 내부 슬롯이 가리키는 프로터타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티.

const obj = { a: 1 };

//객체 리터럴 방식으로 생서한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); //true

//객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인
//Object.prototype 프로퍼티를 상속받는다.
//hasOwnProperty 메서드는 Object.prototype 메서드다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); //false
