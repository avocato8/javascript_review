//내부 메서드 [[call]] 과 [[Construct]]
//함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
//함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론
//함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등 내부 슬롯과
//[[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.

function foo(){}
//일반적인 함수로서 호출 : [[Call]]이 호출
foo();
//생성자 함수로서 호출 : [[Construct]]가 호출
new foo();

//내부 메서드 [[Call]]을 갖는 함수 객체를 callable 이라 하며, (호출할 수 있는 객체, 함수)
// 내부 메서드 [[Construct]]를 갖는 함수 객체를 constructor (생성자 함수로 호출할 수 있는 함수)
// [[Construct]]를 갖지 않는 함수 객체를 non-constructor 라 한다. (생성자 함수로 호출할 수 없는 함수)

//constructor : 함수 선언문, 함수 표현식, 클래스
function foo(){}
const bar = function(){};
const baz = {
    //프로퍼티 x의 값으로 할당된 것은 일반 함수수
    x: function(){}
}
new foo();
new bar();
new baz.x();

//non-constructor : 메서드, 화살표 함수
const obj = {
    x(){}
};
new arrow = () => {};
new obj.x(); // TypeError
new arrow(); // TypeError

//new 연산자
//일반 함수와 생성자 함수에 형식적 차이는 없다.
//new 연산자와 함꼐 함수를 호출하면 생성자 함수로 동작 (함수 객체의 [[Construct]]가 호출)

//new.target
//생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해
//ES6에서는 new.target을 지원
function Circle(radius){
    //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
    if(!new.target){
        // new 연산자와 함꼐 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

//new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출
const circle = Circle(5);
console.log(circle.getDiameter());

//new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용
//Scope-Safe Constructor Pattern
function Circle2(radius){
    //이 함수가 new 연산자와 함께 호출되지 않았다면 this는 전역 객체 window를 가리킨다.
    //this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if(!(this instanceof Circle2)){
        // 생성된 인스턴스 반환
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}
const circle2 = Circle2(5);
console.log(circle.getDiameter()); // 10
//new 연산자와 함께 생성자 함수에 의해 생성된 객체는 프로토타입에 의해 생생상자 함수와 연결된다.
//이를 이용해 new 연산자와 함께 호출되었는지 확인가능

//대부분의 빌트인 생성자 함수(Object, Function, Array, Date, RegExp, Promise)는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을 때와
//동일하게 동작

//String, Number, Boolean은 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환
const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number('123');
console.log(num, typeof num); // 123 number

const bool = Boolean('true');
console.log(bool, typeof bool); // true boolean