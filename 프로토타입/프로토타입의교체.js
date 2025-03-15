//부모 객체인 프로토타입을 동적으로 변경하여
//객체 간의 상속 관계를 동적으로 변경 가능

//1. 생성자 함수에 의한 프로토타입의 교체
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  //생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };
  return Person;
})();

const me = new Person("Lee");
//Person.prototype에 객체 리터럴로 교체하였으므로,
//constructor 프로퍼티가 존재하지 않는다.
//따라서 연결이 파괴되어 생성자 함수를 검색하면 Object가 나온다.
console.log(me.constructor === Object); // true

const Person2 = (function () {
  function Person2(name) {
    this.name = name;
  }

  //생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person2.prototype = {
    constructor: Person2,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };
  return Person2;
})();

const me2 = new Person2("Lee");
console.log(me.constructor === Person2); // true

//2. 인스턴스에 의한 프로토타입의 교체
//프로토타입은 생성자 함수의 prototype 프로퍼티 뿐만 아니라
//인스턴스의 __proto__ 접근자 프로퍼티를 통해 접근할 수 있다.
function Person3(name) {
  this.name = name;
}
const me3 = new Person3("Lee");

//프로토타입으로 교체할 객체
const parent = {
  constructor: Person3,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};
//me3 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me3, parent);
//me3.__proto__ = parent; 와 같다.
me.sayHello(); //Hi! My name is Lee;

//이처럼 프로토타입 교체를 통해 객체 간의 상속 관게를 동적으로 변경하는 것은 번거롭다.
//따라서 프로토타입은 직접 교체하지 않는 것이 좋다.