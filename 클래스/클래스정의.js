//클래스는 class 키워드를 사용하여 정의한다. (보통 파스칼 케이스 사용)
class Person {}
//표현식으로도 가능(일반적이진 않음)
const Person2 = class {};
const Person3 = class MyClass {};

//클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체라는 의미
//즉 클래스는 일급 객체로서
// 무명의 리터럴로 생성할 수 있다.(런타임에 생성이 가능)
//변수나 자료구조에 저장할 수 있다.
//함수의 매개변수에 전달할 수 있다.
//함수의 반환값으로 사용할 수 있다.

//클래스 몸체에서 정의할 수 있는 메서드는
//constructor(생성자), 프로토타입 메서드, 정적 메서드 이다.
class Person4 {
  //생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }

  //프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  //정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}

//인스턴스 생성
const me = new Person4("Lee");

//인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
//프로토타입 메서드 호출
me.sayHi(); //Hi! My name is Lee
//정적 메서드 호출
Person4.sayHello(); // Hello!

//생성자 함수의 정의 방식
var Person5 = (function () {
  //생성자 함수
  function Person5(name) {
    this.name = name;
  }

  //프로토타입 메서드
  Person5.prototype.sayHi = function () {
    console.log(`Hi! My name is + ` + this.name);
  };

  //정적메서드
  Person5.sayHello = function () {
    console.log("Hello!");
  };
  return Person5;
})();
