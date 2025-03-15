//객체리터럴에 의한 객체 생성 방식은 직관적이고 간편하다.
//하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
//따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 떄문에 비효율적이다.

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

//객체는 프로퍼티를 통해 객체 고유의 상태를 표현한다. 그리고 메서드를 통해 프로퍼티를 참조하고 조작하는 동작을 표현한다.
//원을 표현한 객체인 circle1, circle2 객체는 프로퍼티 구조가 동일하다. 객체 고유의 상태 데이터인 radius 프로퍼티의 값은
//객체마다 다를 수 있지만 getDiameter 메서드는 완전히 동일하다.

//생성자함수
//생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 클래스처럼 생성자 함수를 사용하여
//프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle3.getDiameter()); // 10
console.log(circle4.getDiameter()); // 20

//생성자 함수는 이름 그대로 객체를 생성하는 함수다. 하지만 자바와 같은 클래스 기반 객체지향 언어의 생성자와는 다르게
//일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함꼐 호출하면 해당 함수는 생성자 함수로 동작

//new 연산자와 함꼐 호출하지 않으면 생성자 함수로 동작하지 않는다.
const circle5 = Circle(15);
//일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(circle5); // undefined
//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15

//생성자 함수의 인스턴스 생성 과정
//생성자 함수의 역할 - 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 클래스로서 동작하여
// 1. 인스턴스를 생성하는 것과
// 2. 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)

//생성자함수
function Circle2(radius) {
  //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // Circle {}
  //2. this 에 바인딩되어있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  //3. 완성된 인스턴스가 바인딩된 this로 암묵적으로 반환
}
const circle6 = new Circle2(5); // 반지름이 5인 Circle 객체를 생성
//생성자 함수 내부의 코드를 살펴보면 this에 프로퍼티를 추가하고 필요에 따라
//전달된 인수를 프로퍼티의 초기값으로서 할당하여 인스턴스를 초기화
//하지만 인스턴스를 생성하고 반환하는 코드는 보이지 않는다.
//자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
//생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은
//생성자 함수의 기본 동작을 훼손, 따라서 생성자 함수 내부에서 return 문을 반드시 생략