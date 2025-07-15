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
