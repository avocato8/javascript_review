var x = 10;

//명시적 타입 변환
//숫자를 문자열로 타입 캐스팅
var str = x.toString();
console.log(typeof str, str);  //string 10

//x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10

//암묵적 타입 변환
var str = x + '';
console.log(typeof str, str); //string 10

//x 변수의 값이 변한 건 아니다.
console.log(typeof x, x); //number 10