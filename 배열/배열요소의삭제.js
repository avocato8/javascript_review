//배열은 객체이기 때문에, 배열의 특정 요소를 삭제하기 위해
//delete 연산자를 사용할 수 있다.
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, empty, 3]

//length 프로퍼티에 영향을 주지 않는다.
console.log(arr.length); // 3
//따라서 배열이 희소 배열이 되며, length 프로퍼티 값은 변하지 않는다.
//따라서 희소 배열을 만드는 delete 연산자를 사용하지 않는 것이 좋다.

//희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면
//Array.prototpye.splice 메서드를 사용
const arr1 = [1, 2, 3];
arr1.splice(1, 1);
console.log(arr1); // [1, 3]
//length 프로퍼티가 자동 갱신된다.
console.log(arr1.length); // 2