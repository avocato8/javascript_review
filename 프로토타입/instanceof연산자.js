//instanceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자,
//우변에 생성자 함수를 가리키는 식별자는 피연산자로 받는다.
// (객체 instanceof 생성자함수)

//우변 - 생성자 함수의 prototype에 바인딩된 객체가
//좌변 - 객체의 프로토타입 체인 상에 존재하면 true

function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

//Person.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Person);
//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가
console.log(me instanceof Object);

const parent = {};
//프로토타입 교체
Object.setPrototypeOf(me, parent);

//Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 떄문에 false
console.log(me instanceof Person); // false
//Object.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true
console.log(me instanceof Object); // true

//parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩하면
Person.prototype = parent;
console.log(me instanceof Person); // true

//instanceof 연산자를 함수로 표현하면
function isInstanceof(instance, constructor) {
  //프로토타입 취득
  const prototype = Object.getPrototypeOf(instance);

  //재귀 탈출 조건
  if (prototype === null) return false;

  //프로토타입이 생성자 함수의 prototpye 프로퍼티에 바인딩된 객체라면 true를 반환
  //그렇지 않다면 재귀 호출로 프로토타입 체인 상위 상위 프로토타입으로 이동하여 확인
  return (
    prototype === constructor.prototype || isInstanceof(prototype, constructor)
  );
}

console.log(isInstanceof(me, Person)); // true
console.log(isInstanceof(me, Object)); // true
console.log(isInstanceof(me, Array)); // false
