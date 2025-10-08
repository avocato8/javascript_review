//고차 함수는 함수를 인수로 전달받거나 함수를 반환하는 함수
//고차 함수는 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반

//Array.prototype.sort
const fruits = ["Banana", "Orange", "Apple"];
//오름차순 정렬
fruits.sort();
//sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana' ,'Orange]
//한글 문자열인 요소도 오름차순으로 정렬
const fruits2 = ["바나나", "오렌지", "사과"];
fruits2.sort();
console.log(fruits2); // ['바나나', '사과', '오렌지']
//내림차순으로 정렬하려면 sort 메서드를 사용하여 오름차순으로 정렬한 후 reserver 메서드 사용
const fruits3 = ["Banana", "Orange", "Apple"];
fruits3.sort();
console.log(fruits3); // ['Apple', 'Banana', 'Orange']
fruits3.reverse();
console.log(fruits3); // ['Orange', 'Banana', 'Apple']
//숫자 요소로 이루어진 배열을 정렬할 때는 주의
const points = [40, 100, 1, 5, 2, 25, 10];
points.sort();
//숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
//유니코드 코드 포인트의 순서를 따르기떄문(배열의 요소를 문자열로 변환한 후 유니코드 코드 포인트의 순서로 정렬)
console.log(points); // [1, 10, 100, 2, 25, 40, 5]
//따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달
//비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬
const points2 = [40, 100, 1, 5, 2, 25, 10];
points.sort((a, b) => a - b);
console.log(points2); // [1, 2, 5, 10, 25, 40, 100]
//숫자 배열에서 최소/최대값 취득
console.log(points2[0], points2[points2.length - 1]);
//객체를 요소로 갖는 배열ㅇ르 정렬하는 예제는
const todos = [
  { id: 4, content: "Javascript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];
function compare(key) {
  //비교함수는 양수/음수/0을 반환하면 되므로, 산술 연산 대신 비교 연산을 사용할 수 있다.
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}
//id를 기준으로 오름차순 정렬
todos.sort(compare("id"));
console.log(todos);
//content를 기준으로 오름차순 정렬
todos.sort(compare("content"));
console.log(todos);

//Array.prototype.forEach
//forEach메서드는 for문을 대체할 수 있는 고차 함수다.
//forEach 메서드는 자신의 내부에서 반복문을 실행한다.
const numbers = [1, 2, 3];
// const pows = [];
// for (let i = 0; i < numbers.length; i++) {
//   pows.push(numbers[i] ** 2);
// }
// console.log(pows);
//forEach 메서드로 구현하면,
const pows = [];
numbers.forEach((item) => pows.push(item ** 2));
console.log(pows); // [1, 4, 9]
//forEach 메서드의 콜백 함수는
// 1. forEach 메서드를 호출한 배열의 요소값과
// 2. 인덱스,
// 3. this(호출한 배열)을 순차적으로 전달.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(
    `요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`
  );
});

class Numbers {
  numberArray = [];
  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
  }
}
const numbers2 = new Numbers();
numbers2.multiply([1, 2, 3]);
console.log(numbers2.numberArray); // [1, 4, 9]

//더 나은 방법은 ES6 화살표 함수를 사용하는 것이다.
//화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
class Numbers2 {
  numberArray = [];
  multiply(arr) {
    arr.forEach((item) => this.numberArray.push(item * item));
  }
}
const numbers3 = new Numbers2();
numbers3.multiply([1, 2, 3]);
console.log(numbers3.numberArray); // [1, 4, 9]
//희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외.
//map, filter, reduce 메서드 등도 마찬가지
const arr3 = [1, , 3];
arr3.forEach((v) => console.log(v)); // 1, 3

//Array.prototype.map
//map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
//그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환, 원본 배열은 변경X
const number3 = [1, 4, 9];
const roots = number3.map((item) => Math.sqrt(item));
console.log(roots); // [1, 2, 3]
console.log(numbers3); // [1, 4, 9]
//map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은
//map 메서드를 호출한 배열의 length 프로퍼티와 반드시 일치
//map 메서드의 콜백 함수는 1. map 메서드를 호출한 배열의 요소값
// 2. 인덱스
// 3. 배열을 순차적으로 전달
[1, 2, 3].map((item, index, arr) => {
  console.log(
    `요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`
  );
  return item;
});
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    }, this); //map 메서드의 콜백함수 내부에서 this 로 사용할 객체를 전달
  }
}
//더 나은 방법은 화살표 함수 사용
class Prefixer2 {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

//Array.prototype.filter
//filter메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 콜백 함수를 호출,
//콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환.
const number4 = [1, 2, 3, 4, 5];
const odds = numbers.filter((item) => item % 2);
console.log(odds); //[1, 3, 5]
class Users {
  constructor() {
    this.users = [
      { id: 1, name: "Lee" },
      { id: 2, name: "Kim" },
    ];
  }
  findById(id) {
    return this.users.filter((user) => user.id === id);
  }
  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
//filter 메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어있다면 중복된 요소가 모두 제거.
//특정 요소를 하나만 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음
// splice 메서드를 사용

//Array.prototype.reduce
//reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출
//그리고 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번쨰 인수로 전달하면서
//하나의 결과값을 만들어 반환
// 1. 첫 번째 인수로 콜백 함수,
// 2. 두 번째 인수로 초기값을 전달받음
//콜백함수에는
// 1. 콜백함수의 이전 반환값
// 2. 현재 순환중인 배열의 요소값
// 3. 인덱스
// 4. this(reduce 메서드를 호출한 배열 자체)
const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);
console.log(sum); // 10

//평균 구하기
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  //마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average); // 3.5

//최대값 구하기
const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5
//근데 그냥 Math.max가 더 편할듯
const max2 = Math.max(...values);
console.log(max);

//요소의 중복 횟수 구하기
const fruits4 = ["banana", "apple", "orange", "orange", "apple"];
const count = fruits4.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
//console.log(count); // {banana: 1, apple: 2, orange: 2}

//중첩 배열 평탄화
const values2 = [1, [2, 3], 4, [5, 6]];
const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten); // [1, 2, 3, 4, 5, 6]
//flat 메서드를 사용하는게 더 직관적일듯?
//인수 2는 중첩 배열을 평탄화하기 위한 깊이 값
[1, [2, 3, 4, 5]].flat(2); // [1, 2, 3, 4, 5]

//중복 요소 제거
const values3 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values3.reduce(
  (unique, val, i, _values) =>
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 값다면 val은 처음 순회하는 요소
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 다르다면 val은 중복된 요소
    // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거
    _values.indexOf(val) === i ? [...unique, val] : unique,
  []
);
console.log(result); // [1, 2, 3, 4, 5]
//filter 쓰는게 더 나을듯?
const result2 = values3.filter((val, i, _values) => _values.indexOf(val) === i);
console.log(result2); // [1, 2, 3, 4, 5]
//또는 Set?
const result3 = [...new Set(values3)];
console.log(result3); // [1, 2, 3, 4, 5]
//reduce 메서드에는 반드시 초기값을 전달하자!

//Array.prototype.some
//some 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출
//이때 콜백 함수의 반환값이 단 한번이라도 참이면 true,
//모두 거짓이면 false
//배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
[5, 10, 15].some((item) => item > 10); // true

//Array.prototype.every
//콜백 함수의 반환값이 모두 참이면 true,
// 한번이라도 거짓이면 false를 반환.
//모든 요소가 정의한 조건을 만족하는지 확인.
//빈 배열일 경우 항상 true
//모든 요소가 3보다 큰지 확인
[5, 10, 15].every((item) => item > 3); // true

//Array.prototype.find
//자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출
//반환값이 true인 첫 번쨰 요소를 반환.
//true인 요소가 존재하지 않는다면 undefined를 반환.
const users2 = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Choi" },
  { id: 4, name: "Park" },
];
users2.find((user) => user.id === 2); //   {id: 2, name: 'Kim'}
//filter메서드는 배열 반환, find 메서드는 요소값을 반환

//Array.prototype.findIndex
//자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출
//반환값이 true인 첫 번쨰 인덱스를 반환.
//true인 요소가 존재하지 않는다면 -1를 반환.

//id가 2인 요소의 인덱스를 구한다.
users2.findIndex((user) => user.id === 2); // 1
//name이 Park인 요소의 인덱스를 구한다.
users2.findIndex((user) => user.name === "Park"); // 3

//콜백 함수 추상화
function predicate(key, value) {
  return (item) => item[key] == value;
}
users2.findIndex(predicate("id", 2)); // 1

//Array.prototype.flatMap
//map 메서드를 통해 생성된 새로운 배열을 평탄화한다.
const arr20 = ["hello", "world"];
arr20.map((x) => x.split("")).flat(); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
arr20.flatMap((x) => x.split("")); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
//평탄화 깊이를 지정해야하면 flatMap 메서드를 사용하지 말고 map메서드와 flat 메서드를 각각 호출
