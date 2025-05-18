//배열의 요소를 참조할 때에는 대괄호[] 표기법을 사용한다.
// 대괄호 안에는 인덱스가 와야 한다.
//정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.
const arr = [1, 2];
console.log(arr[0]); // 1
console.log(arr[1]); // 2

//존재하지 않는 요소에 접근하면 undefined가 반환
const arr1 = [1, 2];
console.log(arr1[2]); //undefined
