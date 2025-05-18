//자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이
// 빈틈없이 연속적으로 나열된 자료구조(밀집 배열)
//밀집 배열은 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 함

//자바스크립트 배열은 배열의 요소를 위한 각각의 메모리 공간이 동일하지 않고
// 연속적으로 이어져 있지 않다.(희소 배열)
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// {
//     '0': {value: 1, writable: true, enumerable: true, configurable: true}
//     '1': {value: 2, writable: true, enumerable: true, configurable: true}
//     '2': {value: 3, writable: true, enumerable: true, configurable: true}
//     length: {value: 3, writable: true, enumberable: false, configurable: false}
// }

//자바스크립트 배열의 장단점
// 자바스크립트 배열은 해시 테이블로 구현된 객체이므로, 인덱스로 배열에 접근하는 경우 일반적인배열보다 성능이 느릴 수 ㅣㅇㅆ다.
//하지만 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠르다.
