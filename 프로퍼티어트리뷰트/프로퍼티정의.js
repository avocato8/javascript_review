//프로퍼티 정의란 새로운 프로퍼티를 추가하면서
// 프로퍼티 어트리뷰트를 명시적으로 정의하거나
// 기존 프로퍼티의 어트리뷰트를 재정의

const person = {};

//데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);
//firstName {value: 'Ungmo', writable: true, enumerable: true, configurable: true}

//디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

//enumerable이 false인 경우
//for ...in, Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person)); // ["firstName"]

//writable이 false인 경우
//해당 프로퍼티의 [[value]]값을 변경할 수 없다.
//이 떄 값을 변경하면 무시된다.
person.lastName = "kim";

//configurable의 값이 false인 경우 해당 프로퍼티를 삭제하거나 재정의할 수 없다.
//삭제하면 에러는 발생하지 않고 무시
delete person.lastName;
Object.defineProperty(person, "lastName", { enumerable: true });

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
//lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

//접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
  //getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
// fullName {get: f, set: f, enumerable: true, configurable: true}

person.fullName = "Heegun Lee";
console.log(person); //{firstName: "Heegun", lastName: "Lee"}

//Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있다.
//Object.defineProperties 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의 가능
Object.defineProperties(person, {
  //데이터 프로퍼티 정의
  firstName2: {
    value: "Ungmo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName2: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  //접근자 프로퍼티 정의
  fullName2: {
    //getter 함수
    get() {
      return `${this.firstName2} ${this.lastName2}`;
    },
    //setter 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName2 = "Heegun Lee";
console.log(person); //{firstName: 'Heegun', lastName: 'Lee'}
