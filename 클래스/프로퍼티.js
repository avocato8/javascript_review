//인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.
class Person {
  constructor(name) {
    this.name = name; //name 프로퍼티는 public이다.
  }
}

const me = new Person("Lee");
console.log(me);

//접근자 프로퍼티
const person2 = {
  //데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person2.firstName} ${person2.lastName}`);

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
person2.fullName = "Heegun Lee";
console.log(person2); //{firstName: 'Heegun', lastName: 'Lee'}

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.fullName); //Heegun Lee

//fullName은 접근자 프로퍼티다.
//접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person2, "fullName")); //{get: f, set: f, enumerable: true, configurable: true}

//접근자 프로퍼티는 클래스에서도 사용할 수 있다.
class Person3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //setter함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me3 = new Person3("Ungmo", "Lee");

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${me3.firstName} ${me3.lastName}`);

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
me3.fullName = "Heegun Lee";
console.log(me3); //{firstName: 'Heegun', lastName: 'Lee'}

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(me3.fullName); // Heegun Lee

//fullName은 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Person3.prototype, "fullName"));
//{get: f, set: f, enumerable: false, configurable: true}
//클래스의 메서드는 기본적으로 프로토타입 메서드가 되므로, 클래스의 접근자 프로퍼티 또한 인스턴스
//프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.

//클래스 필드 정의 제안
//클래스 필드란 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어
class Person4 {
  name = "Lee";
  //초기화 시에는 constructor를 사용해야 한다.
  constructor(name) {
    this.name = name;
  }
  //함수도 클래스 필드에 할당할 수 있지만 권장하지는 않음
  getName = function () {
    return this.name;
  };
}

//private 필드 정의 제안
class Person5 {
  //private 필드 정의
  #name = "";
  constructor(name) {
    this.#name = name;
  }
  //접근자 프로퍼티를 사용하여 접근 가능
  get name() {
    return this.#name.trim();
  }
}
const me5 = new Person5("Lee");
console.log(me5.name);

//private 필드 #name은 클래스 외부에서 참조할 수 없다.
// console.log(me5.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class

//static 필드 정의 제안
class MyMath {
  //static public 필드 정의
  static PI = 22 / 7;

  //static private 필드 정의
  static #num = 10;

  //static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); //3.14~
console.log(MyMath.increment()); //11