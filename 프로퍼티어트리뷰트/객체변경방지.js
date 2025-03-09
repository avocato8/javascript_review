//자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.

//객체 확장 금지
//Object.preventExtensions
//프로퍼티 추가가 금지된다.
const person = { name: "Lee" };
console.log(Object.isExtensiable(person)); // true

Object.preventExtensions(person); // 프로퍼티 추가를 금지
console.log(Object.isExtensible(person)); // false

person.age = 20; // 무시
console.log(person); // {name: 'Lee'}

//프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지
Object.defineProperty(person, "age", { value: 20 });
// TypeError

//객체 밀봉
//Object.seal
//밀봉된 객체는 읽기와 쓰기만 가능
const perons2 = { name: "Lee" };
console.log(Object.isSealed(person2));
Object.seal(person2);
console.log(Object.isSealed(person2)); // true
console.log(Object.getOwnPropertyDescriptors(person)); // name: {value: 'Lee', writable: true, enumerable: true, configurable: false}

//프로퍼티 추가가 금지
person2.age = 20; // 무시
console.log(person2); // {name: "Lee"}

//프로퍼티 삭제 금지
delete person2.name;
console.log(person2); // {name: 'Lee'}

//프로퍼티 값 갱신은 가능
person2.name = "Kim";
console.log(person2); // {name: 'Kim'}

//프로퍼티 어트리뷰티 재정의가 금지
Object.defineProperty(person2, "name", { configurable: true });
// TypeError

//객체 동결
// Object.freeze
// 동결된 객체는 읽기만 가능
const person3 = { name: "Lee" };
console.log(Object.isFrozen(person3)); //false
Object.freeze(person3);
console.log(Object.isFrozen(person3)); // true
//동결된 객체는 writable과 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptors(person3));
// {name: {value: 'Lee', writable: false, enumerable: true, configurable: false}}

//프로퍼티 추가가 금지
person3.age = 20; // 무시
console.log(person3); // {name: 'Lee'}

//프로퍼티 삭제가 금지
delete person3.name; // 무시
console.log(person3); // {name: 'Lee'}

//프로퍼티 값 갱신이 금지
person3.name = "Kim"; //무시
console.log(person3); // {name: 'Lee'}

//프로퍼티 어트리뷰트 재정의가 금지
Object.defineProperty(person3, "name", { configurable: true });
// TypeError

//불변 객체
//지금까지 살펴본 변경 방지 메서드는 얕은 변경 방지
//중첩 객체까지는 영향을 주지는 못한다.
//객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면
//객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출
function deepFreeze(target) {
  //객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person4 = {
  name: "Lee",
  address: { city: "Seoul" },
};

//깊은 객체 동결
deepFreeze(person4);
console.log(Object.isFrozen(person4)); //true
console.log(Object.isFrozen(person4.address)); // true

person.address.city = 'Busan';
console.log(person); // {name: "Lee", address: {city: "Seoul"}}
