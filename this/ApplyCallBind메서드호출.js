//apply, call, bind 메서드는 Function.prototype의 메서드다.
//즉 이 메서드는 모든 함수가 상속받아 사용할 수 있다.

function getThisBinding() {
  return this;
}

//this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // {a: 1}
console.log(getThisBinding.call(thisArg)); // {a: 1}
//apply와 call 메서드는 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩

function getThisBinding1() {
  console.log(arguments);
  return this;
}

//apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달
console.log(getThisBinding1.apply(thisArg, [1, 2, 3]));
// Argument(3) [1, 2, 3, callee: f, Symbol(Symbol.iterator): f]
//{a : 1}

//call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달
console.log(getThisBinding1.call(thisArg, 1, 2, 3));
//Arguments(3) [1, 2, 3, callee: f, Symbol(Symbol.iterator): f]
//{a : 1}

//apply와 call 메서드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우
//arguments 객체는 배열이 아니기 때문에 Array.prototype.slice 같은 배열의 메서드를 사용할 수 없으나
//apply와 call 메서드를 이용하면 가능
function convertArgsToArray() {
  console.log(arguments);

  //arguments 객체를 배열로 변환
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  return arr;
}
convertArgsToArray(1, 2, 3); //[1, 2, 3]

//Function.prototype.bind 메서드는 apply 와 call 메서드와 달리 함수를 호출하지 않는다.
//첫 번쨰 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.
function getThisBinding2() {
  return this;
}
//this로 사용할 객체
const thisArg2 = { a: 1 };

//bind 메서드는 첫 번째 인수로 전달한 thisArg로 this바인딩이 교체된
//getThisBinding 함수를 새롭게 생성해 반환
console.log(getThisBinding2.bind(thisArg)); //getThisBinding
//bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding2.bind(thisArg)()); // {a : 1}

//bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수가 this와 불일치하는 문제를 해결하기 위해 유용하게 사용
const person = {
  name: "Lee",
  foo(callback) {
    setTimeout(callback, 100);
  },
};

//콜백 함수가 일반 함수로서 호출된 시점에서 this는 전역 객체 window를 가리킨다.
person.foo(function () {
  console.log(`Hi! my name is ${this.name}`); // 브라우저 환경에서는 window.name, Nodejs 환경에서는 undefined
});
//따라서 콜백 함수 내부의 this를 외부 함수 내부의 this와 일치시켜야 한다.
const person2 = {
  name: "Lee",
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  },
};
person.foo(function () {
  console.log(`Hi! my name is ${this.name}`); // Hi! my name is Lee
});
