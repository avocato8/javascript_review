//프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
const person = {
  name: "Lee",
};

//데이터 프로퍼티
//키와 값으로 구성된 일반적인 프로퍼티
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: 'Lee', writable: true, enumerable: true, configurable: true}

//접근자 프로퍼티
//데이터 프로퍼티의 값을 읽거나 저장할 떄 호출되는 접근자 함수로 구성된 프로퍼티
const person2 = {
  //데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티
  //getter함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
person.fullName = "Heegun Lee";
console.log(person); // {firstName: 'Heegun', lastName: 'Lee'}

console.log(person.fullName); // Heegun Lee
let descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor); // {get: f, set: f, enumerable: true, configurable: true}

//접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법은 다음과 같다.
//일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
// {get: f, set: f, enumerable: false, configuable: true}

//함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () {}, "prototype");
// {value: {...}, wriable: true, enumerable: false, configuable: false}
