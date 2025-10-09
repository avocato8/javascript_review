//Number.isFinite
//isFinite메서드는 인수로 전달된 숫자값이 Infinity, -Infinity가 아닌지 검사하여 그 결과를 불리언 값으로 반환
//인수가 정상적인 유한수이면 true를 반환
Number.isFinite(0); // true
Number.isFinite(Number.MAX_VALUE); // true
Number.isFinite(Number.MIN_VALUE); // true
//인수가 무한수이면 false를 반환
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
//인수가 NaN이면 언제 false
Number.isFinite(NaN); // false
//Number.isFinite 메서드는 빌트인 전역 함수 isFinite와 차이가 있다.
//빌트인 전역 함수 isFinite는 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사
//Number.isFinite는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다.
//숫자가 아닌 인수가 주어졌을 떄 반환값은 언제나 false

//Number.isInteger
//Number.isInteger 정적 메서드는 인수로 전달된 숫자값이 정수인지 검사하여 그 결과를 불리언 값으로 반환
Number.isInteger(0); // true
Number.isInteger(123); // true
Number.isInteger(-123); // true
Number.isInteger(0.5); // false
Number.isInteger("123"); // false, 암묵적 타입 변환하지 않는다.
Number.isInteger(false); // false, false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false

//Number.isNaN
//Number.isNaN 정적메서드는 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 반환
Number.isNaN(NaN); // true
//Number.isNaN 메서드는 빌트인 전역 함수 isNaN와 차이가 있다.
//빌트인 전역 함수 isNaN는 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사
//Number.isNaN 메서드는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isNaN(undefined); //false
isNaN(undefined); //true

//Number.isSafeInteger
//Number.isSafeInteger 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여
//그 결과를 불리언 값으로 반환
//-(2^53-1) ~ 2^53 -1 사이의 정수값
Number.isSafeInteger(0); //true
Number.isSafeInteger(0.5); //false
Number.isSafeInteger("123"); //false 암묵적 타입 변환하지 않는다.
Number.isSafeInteger(false); //false 암묵적 타입 변환하지 않는다.
Number.isSafeInteger(Infinity); //false Infinity는 정수가 아니다.

//Number.prototype.toExponential
//숫자를 지수 표기법으로 변환하여 문자열로 반환
(77.1234).toExponential(); //"7.71234e+1"
(77.1234).toExponential(4); //"7.7123e+1"
(77.1234).toExponential(2); //"7.71e+1"
//다음과 같이 숫자 리터럴과 함께 Number 프로토타입 메서드를 사용할 경우 에러가 발생
// 77.toExponential(); //SyntaxError: Invalid or unexpected token

//Number.prototype.toFixed
//toFixed 메서드는 숫자를 반올림하여 문자열로 반환
(12345.6789).toFixed(); //"212346"
(12345.6789).toFixed(1); //"212345.7"
(12345.6789).toFixed(2); //"212345.68"

//Number.prototype.toPrecision
//toPrecision 메서드는 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환
//전체 자릿수로 표현할수 없는 경우 지수 표기법으로 결과를 반환
(12345.6789).toPrecision(); // "12345.6789"
(12345.6789).toPrecision(1); // "1e+4"
(12345.6789).toPrecision(6); // "12345.6"

//Number.prototype.toString
//숫자를 문자열로 변환하여 반환
//인수를 생략하면 10진수 문자열을 반환
(10).toString(); // "10"
//2진수 문자열을 반환
(16).toString(2); // "10000"
//8진수 문자열을 반환
(16).toString(8); // "20"
//16진수 문자열을 반환
(16).toString(16); // "10"
