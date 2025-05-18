//length 프로퍼티는 요소의 개수, 즉 배열의 길이를 나타내는
// 0 이상의 정수를 값으로 갖는다.

[].length; // 0
[1, 2, 3].length; // 3

//length 프로퍼티의 값은 0과 2^32 -1 미만의 양의 정수이다.

//length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신
const arr = [1, 2, 3];
console.log(arr.length); // 3

//요소 추가
arr.push(4);
console.log(arr.length); // 4

//요소 삭제
arr.pop();
console.log(arr.length); // 3

//length 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어든다.
const arr1 = [1, 2, 3, 4, 5];
arr1.length = 3;
console.log(arr1); // [1, 2, 3]

//length 프로퍼티 값보다 큰 값을 할당하면 length 프로퍼티 값은 변경되지만
//실제로 배열의 길이가 늘어나지는 않는다.
const arr2 = [1];
arr2.length = 3;
console.log(arr2.length); // 3
console.log(arr2); // [1, empty * 2]

console.log(Object.getOwnPropertyDescriptors(arr2));
// {
//     '0': {value: 1, writable: true, enumerable: true, configurable: true},
//     length: {value: 3, writable: true, enumerable: false, configurable: false}
// }

//이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소 배열이라 한다.
//자바스크립트는 희소 배열을 문법적으로 허용한다.
const sparse = [, 2, , 4];
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]
console.log(Object.getOwnPropertyDescriptors(sparse));
// {
//     '1': {value: 2, writable: true, enumerable: true, configurable: true},
//     '3': {value: 4, writable: true, enumerable: true, configurable: true},
//     length: {value: 4, writable: true, enumerable: false, configurable: false}
// }

//배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선!
//왠만해서는 희소 배열을 사용하지 말자!