//배열 리터럴
const arr = [1, 2, 3];
console.log(arr.length); // 3

//배열 리터럴에 요소를 하나도 추가하지 않으면 배열의 길이, 즉 length 프로퍼티 값이 0인 빈 배열이 된다.
const arr1 = [];
console.log(arr1.length); // 0

//배열 리터럴에 요소를 생략하면 희소 배열이 생성된다.
const arr2 = [1, , 3]; //희소배열
console.log(arr2.length); // 3
console.log(arr2); // [1, empty, 3]
console.log(arr2[1]); //undefined

//Array 생성자 함수
const arr3 = new Array(10);
console.log(arr3); // [empty * 10]
console.log(arr3.length); // 10
console.log(Object.getOwnPropertyDescriptors(arr3));
// {
//     length: {value: 10, writable: true, enumerable: false, configurable: false}
// }

//배열은 요소를 최대 2^32 - 1 개 가질 수 있다.
//전달된 인수가 범위를 벗어나면 RangeError가 발생한다.
new Array(4294967295);
new Array(4294967296); // RangeError
new Array(-1); // RangeError
new Array(); // []
//전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성
new Array(1, 2, 3); // [1, 2, 3]
new Array({}); // [{}]

//Array 생성자 함수는 new 와 호출하지 않더라도, 일반 함수로서 호출해도배열을 생성하는 생성자 함수로 동작
//Array 생성자 함수 내부에서 new.target을 확인하기 때문

//Array.of
//ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of("string"); // ['string']

//Array.from
//ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를
// 인수로 전달받아 배열로 변환
// 유사배열 객체 또는 이터러블 객체를 이수로 전달받아
// 배열로 변환하여 반환
Array.from({ length: 2, 0: "a", 1: "b" }); // ['a', 'b']
Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
//Array.from을 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.
Array.from({ length: 3 }); // [undefined, undefined, undefined]
//두 번쨰 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환
Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]


