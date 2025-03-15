//객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는
//전통적인 명령형 프로그램의 절차지향적 관점에서벗어나
//객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.
//실체는 속성을 가지고 있고

//다양한 속성 중에서 프로그램에필요한 속성을 간추려 내여 표현하는 것을 추상화

//이름과 주소 속성을 갖는 객체
const person = {
  name: "Lee",
  address: "Seoul",
};
console.log(person);
//이처럼 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체

const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);
console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41
console.log(circle.getArea());

//객체는 상태 데이터(프로퍼티)와 동작(메서드)을 하나의 논리적인 단위로 묶은 복합적인 자료구조