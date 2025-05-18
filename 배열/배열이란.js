//배열은 여러 개의 값을 순차적으로 나열한 자료구조다.
const arr = ["apple", "banana", "orange"];

//배열이 가지고 있는 값을 요소
// 배열의 요소는 자신의 위치를 나타내는 0 이상의 정수인 인덱스를 갖는다.
//요소에 접근할 때는 대괄호 표기법을 사용
arr[0]; // 'apple'

//배열은 요소의 개수(배열의 길이)를 나타내는 length 프로퍼티를 갖는다.
arr.length; //3

//배열은 인덱스와 length 프로퍼티를 갖기 때문에 for 문을 통해 순차적으로 요소에 접근할 수 있다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//자바스크립트에 배열이라는 타입은 없다. 배열은 객체 타입이다.
typeof arr; // object

//배열은 배열 리터럴, Array 생성자 함수, Array.of, Array.from 메서드로 생성할 수 있다.
// 배열의 프로토타입 객체는 Array.prototype 이다.
// Array.prototype에는 배열을 위한 빌트인 메서드를 제공한다.
const arr1 = [1, 2, 3];
arr.constructor = Array; //true
Object.getPrototypeOf(arr) === Array.prototype; // true

//일반 객체와 배열을 구분하는 가장 명확한 차이는 값의 순서, length 프로퍼티다.
//이를 사용하여 반복문으로 순차적으로 값에 접근하기 적합하다.