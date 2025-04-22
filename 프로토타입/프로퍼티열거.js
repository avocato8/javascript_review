///for ... in 문
//객체의 모든 프로퍼티를 순회하면 열거하려면 for ... in문 사용
const person = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
//name: Lee
//address: Seoul

//for ... in문은 순회 대상 객체의 프로퍼티 뿐만 아니라
//상속받은 프로토타입의 프로퍼티까지 열거
//하지만 toString과 같은 Object.prototype의 프로퍼티는 열거되지 않는다.
//Object.prototype.toString 프로퍼티의 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이기 때문
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// for ... in 문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10,
};

for (const key in obj) {
  console.log(key + ": " + obj[key]);
}
// a: 1

//상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열겨하려면
//Object.prototype.hasOwnProperty 메서드를 사용하여 객체 자신의 프로퍼티인지 확인
const person2 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};
for (const key in person) {
  //객체 자신의 프로퍼티인지 확인
  if (!person.hasOwnProperty(key)) continue;
  console.log(key + ": " + person[key]);
}
//name: Lee
//address: Seoul

//배열에는 for ... in 문을 사용하지 말고 for, for ... of 문
//또는 Array.prototype.forEach 메서드를 사용하기를 권장
const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
  //프로퍼티 x도 출력
  console.log(arr[i]); // 1 2 3 10
}

//arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

//forEach 메서드는 요소가 아닌 프로퍼티는 제외
arr.forEach((v) => console.log(v)); // 1 2 3

for (const value of arr) {
  console.log(value); // 1 2 3
}

//객체 자신의고유 프로퍼티만 열겨하기 위해서는 for ... in 문을 사용하는 것보다는
//Object.keys/values/entries 메서드를 사용하는 것을 권장
//Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환
console.log(Object.keys(person2)); // ["name", "address"]

//ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환
console.log(Object.values(person)); // ["Lee", "Seoul"]

//ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person2).forEach(([key, value]) => console.log(key, value));
//name Lee
//address Seoul
