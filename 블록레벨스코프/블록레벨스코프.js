//var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을
//지역 스코프로 인정하는 함수 레벨 스코프를 따른다.

//let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는
//블록레벨 스코프를 따른다.
let foo = 1;

{
    let foo = 2;
    let bar = 3;
}
console.log(foo); // 1
console.log(bar); // ReferenceError

