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

//Array.prototype.push
//push 메서드는 인수로 전달받은 모든 값을 왼본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환
const arr2 = [1, 2];
//인수로 전달받은 모든 값을 원본 배열 arr2의 마지막 요소로 추가하고 변경된 length 값을 반환
let result2 = arr.push(3, 4);
console.log(result2); // 4
//push 메서드는 원본 배열을 직접 변경한다.
console.log(arr2); // [1, 2, 3, 4]

//push 메서드는 성능 면에서 좋지 않다.
//마지막 요소로 추가할 요소가 한개뿐이라면 push 메서드 보다는 length 프로퍼티를 사용하여
//배열의 마지막에 요소를 직접 추가할 수 있다.
arr2[arr2.length] = 5;
console.log(arr2); // [1, 2, 3, 4, 5]

//push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있어서, ES6의 스프레드 문법을 사용하는 편이 좋다.
const newArr = [...arr2, 6];
consolelog(newArr); // [1, 2, 3, 4, 5, 6]

//Array.prototype.pop
//pop메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
//원본 배열이 빈 배열이면 undefined를 반환한다.
const arr3 = [1, 2];
let result3 = arr3.pop();
console.log(result3); // 2

//pop 메서드는 원본 배열을 직접 변경
console.log(arr3); // [1]

//pop메서드와 push 메서드를 사용하면 스택을 쉽게 구현할 수 있다.
//스택을 생성자 함수로 구현하면,
const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.array.push(value);
    },
    pop() {
      return this.array.pop();
    },
    entries() {
      return { ...this.array };
    },
  };
  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]

//스택을 클래스로 구현하면,
class Stack1 {
  #array; //private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array`);
    }
    this.#array = array;
  }

  push(value) {
    return this.#array.push(value);
  }
  pop() {
    return this.#array.pop();
  }
  entries() {
    return [...this.#array];
  }
}

const stack1 = new Stack1([1, 2]);
console.log(stack1.entries()); //[1, 2]

stack1.push(3);
console.log(stack.entries()); // [1, 2, 3]

//Array.prototype.unshift 메서드
const arr4 = [1, 2];

//인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고, 변경된 length값을 반환한다.
let result4 = arr4.unshift(3, 4);
console.log(result4); // 4
//unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr4); // [3, 4, 1, 2]
//따라서 스프레드 문법 ...을 되도록 사용하자!
const arr5 = [1, 2];
const newArr5 = [3, ...arr];
console.log(newArr5); // [3 ,1, 2]

//Array.prototype.shift
//shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
//원본 배열이 빈 배열이면 undefined를 반환한다.
const arr6 = [1, 2];
let result6 = arr6.shift();
console.log(result6); // 1
//원본 배열을 직접 변경한다.
console.log(arr6); // [2]

//shift와 pop을 사용하여 큐 구현
const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  Queue.prototype = {
    constructor: Queue,
    enqueue(value) {
      return this.array.push(value);
    },
    dequeue() {
      return this.array.shift();
    },
    entries() {
      return [...this.array];
    },
  };
  return Queue;
})();

//클래스로 구현
class Queue1 {
  #array;

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array`);
    }
  }

  enqueue(value) {
    return this.#array.push(value);
  }
  dequeue() {
    return this.#array.shift();
  }
  entries() {
    return [...this.#array];
  }
}
const queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]

//Array.prototype.splice
//push, pop. unshift, shift 매서드는 모두 원본 배열을 직접 변경하는 메서드
//원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용
//splice 메서드는 3개의 매개변수가 있으며 원본 배열을 직접 변경
const arr7 = [1, 2, 3, 4];
//원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입
const result7 = arr7.splice(1, 2, 20, 30);

//제거한 요소가 배열로 반환
console.log(result7);
//splice 메서드는 원본 배열을 직접 변경
console.log(arr7); // [1, 20, 30, 4]

//splice 메서드의 두 번쨰 인수를 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소들을 삽입
const arr8 = [1, 2, 3, 4];
const result8 = arr8.splice(1, 0, 100);
//원본 배열이 변경된다.
console.log(arr8); // [1, 100, 2, 3, 4]
//제거한 요소가 배열로 반환된다.
console.log(result); // []

//splice 메서드의 세 번째 인수, 즉 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소를 제거
const arr9 = [1, 2, 3, 4];
const result9 = arr9.splice(1, 2);
console.log(arr9); // [1, 4]
console.log(result9); // [2, 3]

//splice 메서드의 두 번째 인수, 즉 제거할 요소의 개수를 생략하면 첫 번쨰 인수로 전달된 시작 인덱스부터 모든 요소를 제거
const arr10 = [1, 2, 3, 4];
const result10 = arr10.splice(1);
console.log(arr10); // [1]
console.log(result10); //[2, 3, 4]

//배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 사용
const arr11 = [1, 2, 3, 1, 2];

//배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
function remove(array, item) {
  const index = array.indexOf(item);

  //제거할 item 요소가 있다면 제거한다.
  if (index !== -1) array.splice(index, 1);
  return array;
}

console.log(remove(arr11, 2)); // [1, 3, 1, 2]
console.log(remove(arr11, 10)); // [1, 3, 1, 2]
//filter메서드를 사용하여 특정 요소를 제거할 수도 있다.
//하지만 특정 요소가 중복된 경우 모두 제거된다.
const arr12 = [1, 2, 3, 1, 2];
//배열 array에서 모든 item 요소를 제거한다.
function removeAll(array, item) {
  return array.filter((v) => v !== item);
}
console.log(removeAll(arr12, 2)); // [1, 3, 1]

//Array.prototype.slice
//slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
//원본 배열은 변경되지 않는다.
const arr13 = [1, 2, 3];
//arr13[0]부터 arr13[1] 이전까지 복사하여 반환한다.
arr13.slice(0, 1); // [1]
arr13.slice(1, 2); // [2]
console.log(arr13); // [1, 2, 3]
//slice 메서드의 두 번째 인수를 생략하면 첫 번쨰 인수로 전달받은 인덱스부터 모든 요소를 복사하여 배열로 반환
const arr14 = [1, 2, 3];
arr14.slice(1); // [2, 3]
//slice메서드의 첫 번쨰 인수가 음수인 경우 배열의 끝에서부터 요소를 복사하여 배열로 반환
const arr15 = [1, 2, 3];
arr15.slice(-1); // [3]
arr.slice(-2); // [2, 3]
//slice 메서드의 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환
const arr16 = [1, 2, 3];
const copy16 = arr16.slice();
console.log(copy16); //[1, 2, 3]
console.log(copy16 == arr16); // false
//이 때 생성된 복사본은 얕은 복사를 통해 생성
//slice 메서드가 복사본을 생성하는 것을 이용하여 arguments, HTMLCollection, NodeList같은
//유사 배열 객체를 배열로 변환할 수 있다.
function sum() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum(1, 2, 3)); //6
//Array.from 메서드를 사용하면 더욱 간단하게 유사 배열 객체를 배열로 변환
function sum1() {
  const arr = Array.from(arguments);
  console.log(arr);
  return arr.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum1(1, 2, 3)); //6
//arguments 객체는 유사 배열 객체이면서 이터러블 객체다.
//이터러블 객체는 ES6의 스프레드 문법을 사용하여 간단하게 배열로 변환할 수 있다.
function sum2() {
  const arr = [...arguments];
  console.log(arr);
  return arr.reduce((arr, cur) => arr + cur, 0);
}
console.log(sum2(1, 2, 3));

//Array.prototype.join
//join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열,
//즉 구분자로 연결한 문자열을 반환한다.
const arr17 = [1, 2, 3, 4];
//기본 구분자는 콤마
arr7.join(); // '1, 2, 3, 4';
arr7.join(""); //'1234';

//Array.prototype.reverse
//reverse메서드는 원본 배열의 순서를 반대로 뒤집는다.
//이 때 원본 배열이 변경된다.
//반환값은 변경된 배열이다.
const arr18 = [1, 2, 3];
const result18 = arr18.reverse();
//reverse메서드는 원본 배열을 직접 변경한다.
console.log(arr18); // [3, 2, 1]
console.log(result18); // [3, 2, 1]

//Array.prototype.fill
//fill 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
//이 때 원본 배열이 변경된다.
const arr19 = [1, 2, 3];
//인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr19.fill(0);
//fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr19); // [0, 0, 0]
//두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
const arr20 = [1, 2, 3];
arr20.fill(0, 1);
console.log(arr20); // [1, 0, 0]
//세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
const arr21 = [1, 2, 3, 4, 5];
//인수로 전달받은 값 0을 배열의 인덱스 1부터 3이전 까지 요소로 채운다.
arr21.fill(0, 1, 3);
console.log(arr21); // [1, 0, 0, 4, 5]
//fill 메서드를 사용하면 배열을 생성하면서 특정 값으로 요소를 채울 수 있다.
const arr22 = new Array(3);
console.log(arr22); // [empty * 3]
const result22 = arr22.fill(1);
console.log(arr22); // [1, 1, 1]
console.log(result22); // [1, 1, 1]
//fill 메서드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수 밖에 없다는 단점이 있다.
//Array.from 메서드를 사용하면 두 번째 인수로 전달할 콜백 함수를 통해 요소값을 만들면서 배열을 채울 수 있다.
//Array.from 메서드는 두번쨰 인수로 전달한 콜백 함수에 첫 번쨰 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출
//콜백 함수의 반환값으로 구성된 배열을 반환
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequences(3)); // [0, 1, 2]

//Array.prototype.includes
//배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환
const arr23 = [1, 2, 3];
//배열에 요소 2가 포함되어 있는지 확인한다.
arr23.includes(2); // true
arr23.includes(100); // false
//두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
//두 번쨰 인수를 생략할 경우 기본값 0이 설정
//두 번째 인수에 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여
//검색 시작 인덱스를 설정
const arr24 = [1, 2, 3];
arr24.includes(1, 1); // false
arr24.includes(3, -1); // true
//배열에서 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메서드를 사용하여도 배열 내에 특정 요소가
//포함되어 있는지 확인할 수 있다.
//하지만 indexOf 메서드를 사용하면 반환값이 -1 인지 확인해 보아야 하고 배열에 NaN가 포함되어 있는지 확인할 수 없다는 문제
[NaN].indexOf(NaN) !== -1; // false
[NaN].includes(NaN); // true

//Array.prototype.flat
//flat 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화
[1, [2, 3, 4, 5]].flat(); // [1, 2, 3, 4, 5]
//인수를 생략할 경우 평탄화할 깊이 기본값은 1이다.
//Infinity를 전달하면 중첩 배열 모두를 평탄화한다.
[1, [2, [3, [4]]]].flat(2); // [1,2, 3,[4]]
[1, [2, [3, [4]]]].flat().flat(); // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity); // [1,2, 3, 4]
