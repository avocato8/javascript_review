//변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다.
//그리고 소멸한다.
//변수는 생명 주기가 있다.

function foo(){
    //변수 x 생성
    var x = 'local';  //변수 x에 값 할당
    console.log(x); 
    return x; // 변수 x 소멸
}
foo();
console.log(x); //ReferenceError

//지역 변수의 생명 주기는 함수의 생명 주기와 일치

var x = 'global';
function foo(){
    console.log(x); //undefined, foo 함수 내부에서 선언된 지역 변수 x는 이 시점 전에 선언되었고 undefined로 초기화화 
    var x = 'local';
}
foo();
console.log(x);

//이처럼 호이스팅은 스코프를 단위로 동작
//호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는
//자바스크립트 고유의 특징

// 전역 변수의 생명 주기
// 함수와 달리 전역 코드는 명시적인 호출 없이 실행되고 더 이상 실행할 문이 없을 떄 종료
// var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다.
//브라우저 환경에서 전역 객체는 window 이므로, var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
//var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치치