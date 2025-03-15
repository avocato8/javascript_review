//프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성
//함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성
console.log(Person.prototype); // {constructor: f}

//생성자 함수
function Person(name) {
  this.name = name;
}

//non-constructor는 프로토타입이 생성되지 않는다.
const Person2 = (name) => {
  this.name = name;
};
console.log(Person.prototype); //undefined



