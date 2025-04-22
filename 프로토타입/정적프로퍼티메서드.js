//정적 프로퍼티/메서드는 생성자함수로 인스턴스를 생성하지 않아도
//참조/호출할 수 있는 프로퍼티/메서드이다.
//생성자 함수
function Person(name) {
  this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

//정적 프로퍼티
Person.staticProp = "static prop";
//정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};
const me = new Person("Lee");

Person.staticMethod(); //staticMethod
//인스턴스로는 호출할 수 없다.
// me.staticMethod();

//Object.create는 정적 메서드다.
const obj = Object.create({ name: "Lee" });
obj.hasOwnProperty("name"); // false

function Foo() {}

//프로토타입 메서드
Foo.prototype.x = function () {
  console.log("x");
};

const foo = new Foo();
//프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
foo.x(); // x

//정적 메서드
Foo.x = function () {
  console.log(x);
};
Foo.x(); // x
