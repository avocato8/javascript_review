//캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.
//캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라 한다.

//자바스크립트는 public, private, protected 와 같은 접근 제한자를 제공하지 않는다.
//객체의 모든 프로퍼티와 메서드는 기본적으로 public이다.

function Person(name, age) {
  this.name = name; //public
  let _age = age; //private

  //인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}, I am ${_age}`);
  };
}

const me = new Person("Lee", 20);
me.sayHi(); //Hi! My name is Lee. I am 20.
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person("Kim", 30);
you.sayHi(); //Hi! My name is Kim. I am 30.
console.log(you.name); //Kim
console.log(you._age); //undefined

//위 예제의 sayHi 메서드는 인스턴스 메서드이므로 Person객체가 생성될 떄마다 중복 생성된다.
//sayHi 메서드를 프로토타입 메서드로 변경하여 SayHi 메서드의 중복 생성을 방지하자.
function Person2(name, age) {
  this.name = name;
  let _age = age;

  //프로토타입 메서드
  Person2.prototype.sayHi = function () {
    //Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}
//이 때 Person.prototype.sayHi 메서드 내에서 Person 생성자 함수의 지역 변수 _age를 참조할 수 없는 문제가 발생한다.
//따라서 즉시 실행 함수를 사용하여 Person의 생성자 함수와 Person.prototype.sayHi 메서드를 하나의 함수 내에 모아 보자.
const Person3 = (function () {
  let _age = 0;

  //생성자 함수
  function Person3(name, age) {
    this.name = name;
    _age = age;
  }

  //프로토타입 메서드
  Person3.prototype.sayHi = function () {
    console.log(`Hi! My name  is ${this.name}. I am ${_age}`);
  };

  //생성자 함수를 반환
  return Person3;
})();

const me3 = new Person3("Lee", 20);
me3.sayHi(); //Hi! My name is Lee. I am 20.
console.log(me3.name); // Lee
console.log(me3._age); // undefined

const you3 = new Person3("Kim", 30);
you3.sayHi(); //Hi! My name is Kim. I am 30.
console.log(you3.name); // Kim
console.log(you3._age); // undefined

me3.sayHi(); //Hi! My name is Lee. I am 30. _age 변수 값이 변경된다!
//Person.prototype.sayHi 메서드는 자신의 상위 스코프인 즉시 실행 함수의 실행 컨텍스트의 렉시컬 환경의 참조를
//[[Enviroment]]에 저장하여 기억한다.

//따라서 Person 생성자 함수의 모든 인스턴스가 상속을 통해 호출할 수 있는 Person.prototype.sayHi 메서드의 상위 스코프는
//어떤 인스턴스로 호출하더라도 하나의 동일한 상위 스코프를 사용하게 된다.
//이러한 이유로 Person 생성자 함수가 여러 개의 인스턴스를 생성할 경우 _age 변수의 상태가 유지되지 않는다.

//이처럼 자바스크립트는 정보 은닉을 완전하게 지원하지 않는다.
//인스턴스 메서드를 사용한다면 Private을 흉내낼 수 있지만 프로토타입 매서드를 사용한다면 불가능해진다.
//하지만 최신 자바스크립트에서는 가능함!!