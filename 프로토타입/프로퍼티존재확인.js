//in 연산자
//in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in person); // true
console.log("address" in person); //true
console.log("age" in person); // false

//in 연산자는 객체의 프로퍼티 뿐만 아니라
//객체가 상속받은 모든 프로토타입의프로퍼티를 확인
console.log("toString" in person); // true

//ES6에서 도입된 Reflect.has 메서드를 사용할 수도 있다.
console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

//Object.prototype,hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인
//객체 고유의 프로퍼티 키인 경우에만 true
//상속받은 프로토타입 프로퍼티 키인 경우 false
console.log(person.hasOwnProperty("name")); //true
console.log(person.hasOwnProperty("age")); //false
console.log(person.hasOwnProperty('toString')); //false
