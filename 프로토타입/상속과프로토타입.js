//상속은 객체지향 프로그래밍의 핵심 개념
//자바스크립트는 프로토타입을 기반으로 상속을 구현

//생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}
//반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
//반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

//Circle 생성자 함수는 인스턴스를 생성할 떄마다 동일한 동자글 하는
//getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유
//getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

//상속을 통해 불필요한 중복을 제거, 자바스크립트는 프로토타입을 기반으로 상속을 구현
//생성자 함수
function Circle2(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function () {
  return Math.PI ** (this.radius ** 2);
};
//인스턴스 생성
const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

//Circle 생성자함수가 생성한 모든 인스턴스는 부모객체의 역할을 하는
//프로토타입 Circle.prototype 으로부터 getArea 메서드를 상속
console.log(circle3.getArea === circle4.getArea); // true

// 자신의 상태를 나타나는 radius 프로퍼티만 개별적으로 소유
// 내용이 동일한 메서드는 상속을 통해 공유하여 사용용
