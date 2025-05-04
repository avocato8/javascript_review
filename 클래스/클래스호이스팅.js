//클래스는 함수로 평가된다.
class Person {}

console.log(typeof Person); //function

//클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 소스코드 평가 과정, 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성
//이 때 클래스가 평가되어 생성된 함수 객체는 constructor이다.
//생성자 함수로서 호출할 수 있는 함수는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.

//단 클래스는 클래스 정의 이전에 참조할 수 없다.
// console.log(Person2);
// class Person2 {}

//클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않음!
const Person3 = "";

{
  //호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person3);
  class Person3 {}
}
