//메서드가 자신이 속한 객체의 프로퍼티를 참조하려면
//자신의속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter());

//생성자 함수 방식으로 인스턴스를 생성하는 경우에
//생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.

//this 라는 특수한 식별자를 제공
//this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
//this 를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 없다.

//함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달
//this 바인딩은 함수 호출 방식에 의해 동적으로결정

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
//객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, circle을 가리킨다.

function Circle2(radius) {
  this.radius = radius;
}
Circle2.prototype.getDiameter = function () {
  return 2 * this.radius;
};
//여기서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
const circle2 = new Circle2(5);
console.log(circle.getDiameter()); // 10

//this는 코드 어디에서든 참조 가능
console.log(this); // window

function square(number) {
  //일반 함수 내부에서 this 는 전역 객체
  console.log(this); // window
  return number * number;
}

const person = {
  name: "Lee",
  getName() {
    console.log(this); // {name: 'Lee', getName: f}
    return this.name;
  },
};

function Person(name) {
  this.name = name;
  console.log(this); // Person {name: "Lee"}
}
const me = new Person("Lee");
