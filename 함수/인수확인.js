function add(x, y) {
  return x + y;
}
console.log(add(2)); // NaN
console.log(add("a", "b")); // 'ab'

//코드 상으로는 어떤 타입의 인수를 전달해야 하는지, 어떤 타입의 값을 반환해야 하는지 명확하지 않다.
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }
  return x + y;
}
console.log(add(2)); // TypeError 인수는 모두 숫자 값이어야 합니다.
console.log(add("a", "b")); // TypeError 인수는 모두 숫자 값이어야 합니다.

//인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add()); // 0
//ES6
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

//매개변수가 많아지면 함수를 호출할 때 전달해야 할 인수의 순서를 고려
//이는 함수의 사용법을 이해하기 어렵게 만든다.

//매개변수의 개수가 많다는 것은 함수가 여러가지 일을 한다는 증거이므로 바람직하지 않다.
//이상적인 함수는 한가지 일만 해야하며, 가급적 작게