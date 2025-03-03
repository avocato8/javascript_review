//프로퍼티 축약 표현
//ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // {x: 1, y: 2}

//ES6
//프로퍼티 키는 변수 이름으로 자동 생성
let x = 1,
  y = 2;
const obj = { x, y };
console.log(obj); // {x: 1, y: 2}

//계산된 프로퍼티 이름
//ES5
var prefix = "prop";
var i = 0;

var obj = {};

obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
console.log(obj);
// {prop-1: 1, prop-2: 2, prop-3: 3}

//ES6
//객체 리터럴 내부에서 프로퍼티 키를 동적 생성할 수 있다.
const prefix = "prop";
let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj);
// {prop-1: 1, prop-2: 2, prop-3: 3}

//메서드 축약 표현
//ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};
obj.sayHi(); //Hi! Lee

//ES6
const obj = {
  name: "Lee",
  sayHi() {
    console.log("Hi! " + this.name);
  },
};
obj.sayHi(); //Hi! Lee
