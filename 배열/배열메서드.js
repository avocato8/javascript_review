//자바스크립트는 배열을 다룰 때 유용한 다양한 빌트인 메서드를 제공한다.
//Array 생성자 함수는 정적 메서드를 제공하며,
//배열 객체인 프로토타입 Array.prototype은 프로포타입 메서드를 제공

//배열 메서드는 결과물을 반환하는 패턴이 두 가지
//1. 원본 배열(this가 가리키는 객체)를 직접 변경하는 메서드
//2. 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드

const arr = [1];
//push 메서드는 원본 배열을 직접 변경한다.
arr.push(2);
console.log(arr); // [1, 2]

//concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환
const result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]

//가급적이면 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.

//Array.isArray
//Array.isArray는 생성자 함수의 정적 메서드이다.
//Array.isArray메서드는 전달된 인수가 배열이면 true, 아니면 false
Array.isArray([]); //true
Array.isArray([1, 2]); //true
Array.isArray(new Array()); //true

Array.isArray(); //false
Array.isArray({}); //false
Array.isArray(null); //false
Array.isArray(undefined); //false
Array.isArray(1); //false
Array.isArray("Array"); //false
Array.isArray(true); //false
Array.isArray(false); //false
Array.isArray({ 0: 1, length: 1 }); // false

//Array.prototype.indexOf
//원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환
const arr1 = [1, 2, 2, 3];

//요소를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환
arr1.indexOf(2); // 1
arr1.indexOf(4); // -1
//두 번쨰 인수는 검색을 시작할 인덱스다.
//두 번쨰 인수를 생락하면 처음부터 검색한다.
arr1.indexOf(2, 2); // 2

//indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 떄 유용
const foods = ["apple", "banana", "orange"];
if (foods.indexOf("orange") === -1) {
  foods.push("orange");
}
console.log(foods); // ['apple', 'banana', 'orange']

//ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
const foods1 = ["apple", "banana", "orange"];
if (!foods1.includes("orange")) {
  foods1.push("orange");
}
console.log(foods1); //['apple', 'banana', 'orange']
