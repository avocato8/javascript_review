//객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼
//배열에도 요소를 동적으로 추가할 수 있다.
const arr = [0]; 
arr[1] = 1;
console.log(arr); // [0, 1]
console.log(arr.length); // 2

//만약 현재 배열의 length 프로퍼티 값보다 큰 인덱스로
//새로운 요소를 추가하면 희소 배열이 된다.
arr[100] = 100;
console.log(arr); //[0, 1, empty * 98, 100]
console.log(arr.length); // 101

console.log(Object.getOwnPropertyDescriptors(arr));
// {
//     '0': {value: 0, writable: true, enumerable: true, configurable: true},
//     '1': {value: 1, writable: true, enumerable: true, configurable: true},
//     '100': {value: 100, writable: true, enumerable: true, configurable: true},
//     length: {value: 101, writable: true, enumberable: false, configurable: false}
// }

//인덱스는 요소의 위치를 나타내므로 반드시 0이상의 정수를 사용해야 한다.
//만약 정수 이외의 값을 인덱스처럼 사용하면 프로퍼티가 생성된다.
const arr1 = [];

arr1[0] = 1;
arr1['1'] = 2;

arr1['foo'] = 3;
arr1.bar = 4;
arr1[1.1] = 5;
arr1[-1] = 6;
console.log(arr1); // [1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6]
console.log(arr1.length); // 2
// console.log(Object.getOwnPropertyDescriptors(arr1));