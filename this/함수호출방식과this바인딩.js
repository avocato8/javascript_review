//this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라서 동적으로 결정
const foo = function () {
  console.dir(this);
};

//1. 일반 함수 호출
// foo 함수 내의 this는 전역 객체 window를 가리킨다.
foo(); //window

//2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 obj 객체를 가리킨다.
const obj = { foo };
obj.foo();

//3. 생성자 함수 호출
// foo 함수를 new 연산자와 함꼐 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo();

//4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
//foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };
foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar

