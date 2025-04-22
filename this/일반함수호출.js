//일반 함수 호출
//기본적으로 this에는 전역 객체가 바인딩된다.
function foo1() {
  console.log("foo1's this: ", this); // window
  function bar1() {
    console.log("bar1's this: ", this); // window
  }
  bar1();
}
foo();
//strict mode에서는 undefined가 바인딩

//메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩
var value = 1;
const obj1 = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: f}
    console.log("foo's this.value: ", this.value); // 100

    function bar() {
      console.log("bar's this: ", this); //window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  },
};
obj1.foo();
//콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this도 전역 객체가 바인딩
var value = 1;

const obj2 = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: f}
    //콜백 함수 내부의 this에는 전역 객체가 바인딩
    setTimeout(function () {
      console.log("callback's this: ", this); //window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  },
};
obj2.foo();

//이처럼 일반 함수로 호출된 모든 함수 내부의 this에는 전역 객체가 바인딩된다.

//메서드 내부의 중첩 함수, 콜백 함수나 메서드의 this 바인딩과 일치시키기 위한 방법에는
//1. this 바인딩(obj)을 that에 할당
var value = 1;

const obj3 = {
  value: 100,
  foo() {
    const that = this;

    //콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};
obj3.foo();

//2. this를 명시적으로 바인딩할 수 있는
// Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드 제공
var value = 1;
const obj4 = {
  value: 100,
  foo() {
    //콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(
      function () {
        console.log(this.value);
      }.bind(this),
      100
    );
  },
};
obj4.foo();

//3. 화살표 함수를 사용해서 this를 바인딩
var value = 1;
const obj5 = {
  value: 100,
  foo() {
    //화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100);
  },
};
obj5.foo();
