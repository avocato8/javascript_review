//전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해
//어떤 객체보다도 먼저 생성되는 특수한 객체

//브라우저 환경에서는 window
//Node.js 환경에서는 global 이 전역 객체

//전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array) 와
//환경에 따른 호스트 객체(Web API, Node js 호스트 API),
//var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.

//즉 전역 객체는 계층적 구조상 어떤 객체에도 속하지 않은 모든 빌트인 객체의 최상위 객체다.
//전역 객체 자신은 어떤 객체의 프로퍼티도 아니며, 객체의 계층적 구조상
//표준 빌트인 객체과 호스트 객체르 프로퍼티로 소유한다는 뜻

//전역 객체의 특징
//1. 전역 객체는 개발자가 의도적으로 생성할 수 없다.
//2. 전역 객체의 프로퍼티를 참조할 때 window 또는 global을 생략할 수 있다.

global.parseInt("F", 16); // 15
parseInt("F", 16); // 15

global.parseInt === parseInt;

//var 키워드로 선언한 전역 변수
var foo = 1;
console.log(global.foo); // 1

//선언하지 않은 변수에 값을 암묵적 전역
bar = 2;
console.log(global.bar); // 2

//전역 함수
function baz() {
  return 3;
}
// console.log(global.baz()); // 3

//let, const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉 window.foo와 같이 접근할 수 없다.
//브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다.
//여러개의 script 태그를 통해 자바스크립트 코드를 분리해도 하나의 전역 객체 window 를 공유

//1. 빌트인 전역 프로퍼티
// 빌트인 전역 프로퍼티는 전역 객체의 프로퍼티를 의미

//1.1 Infinity 프로퍼티는 무한대를 나타내는 숫자값 Infinity를 갖는다.
console.log(global.Infinity === Infinity); // true

//양의 무한대
console.log(3 / 0); //Infinity
//음의 무한대
console.log(-3 / 0); //-Infinity
//Infinity는 숫자값이다.
console.log(typeof Infinity); //number

//1.2 NaN
console.log(global.NaN); // NaN
console.log(Number("xyz")); // NaN
console.log(1 * "string"); //NaN
console.log(typeof NaN); // number

//1.3 undefined
console.log(global.undefined); //undefined
var foo;
console.log(foo); //undefined
console.log(typeof undefined); //undefined

//2. 빌트인 전역 함수
// 빌트인 전역 함수는 전역 객체의 메서드

//2.1 eval
//eval 함수는 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.
//전달받은 문자열 코드가 표현식이라면 eval 함수는 문자열 코드를 런타임에 평가하여 값을 생성,
//전달받은 인수가 표현식이 아닌 문이라면 eval함수는 문자열 코드를 런타임에 실행

// 표현식인 문
eval("1+2;"); // 3
//표현식이 아닌 문
// eval("var x = 5;");
//eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언
// console.log(x); //5
//객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval("({a: 1})");
console.log(o);
//함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function(){return 1;})");
console.log(f()); // 1
//인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환
eval("1 + 2; 3 + 4;"); // 7

//eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정
const x = 1;
function foo() {
  //eval 함수는 런타임에 foo함수의 스코프를 동적으로 수정
  eval("var x = 2;");
  console.log(x); // 2
}
foo();
console.log(x); // 1
//strict mode에서는 eval함수 자신의 자체적인 스코프를 생성
function foo1() {
  "use strict";

  eval("var x = 2; console.log(x);"); //2
  console.log(x); // 1
}
//eval함수를 통해 사용자로부터 입력받은 콘텐츠를 실행하는 것은 보안에 매우 취약

//2.2 isFinite
//전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true
//무한수이면 false를 반환
//전달받은 인수의 타입이 숫자가 아닌경우 숫자로 변환한 후 검사 수행
//NaN 으로 평가되는 값이라면 false
isFinite(0); //true
isFinite(2e64); // true
isFinite("10"); // true
isFinite(null); //true null을 숫자로 변환하면 0이므로로

isFinite(Infinity); // false
isFinite(-Infinity); // false

isFinite(NaN); //false
isFinite("Hello"); //false
isFinite("2005/12/12"); //false

//2.3 isNaN
//전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환
//인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사를 수행
isNaN(NaN); //true
isNaN(10); // false

isNaN("blabla"); // true
isNaN("10"); //false
isNaN("10.12"); //false
isNaN(""); // false
isNaN(" "); //false

isNaN(true); //false
isNaN(null); //false

isNaN(undefined); // true

isNaN({}); // true

isNaN(new Date()); // false
isNaN(new Date().toString()); //true

//2.4 parseFloat
//전달받은 문자열 인수를 부동 소수점 숫자로 해석하여 반환
parseFloat("3.14"); // 3.14
parseFloat("10.00"); // 10

//공백으로 구분된 문자열은 첫 번째 문자열만 반환
parseFloat("34 45 66"); // 34
parseFloat("40 years"); // 40

//첫 번째 문자열을 숫자로 변환할 수 없3다면 NaN를 반환
parseFloat("He was 40"); //NaN

//앞 뒤 공백은 무시
parseFloat(" 60 "); // 60

//2.5 parseInt
//전달받은 문자열 인수를를 정수로 해석하여 반환
parseInt("10"); // 10
parseInt("10.123"); //10

//전달받은 인수가 문자열이 아니면 문자열로 변환한 다음, 정수로 해석하여 반환
parseInt(10); // 10
parseInt(10.123); // 10

//두 번째 인수로 진법을 나타내는 기수(2 ~ 36)를 전달할 수 있다.
//기수를 지정하면 첫 번째 인수로 전달된 문자열을 해당 기수의 숫자로 해석하여 반환한다.
//반환값은 언제나 10진수

//10을 10진수로 해석하고 그 결과를 10진수 정수로 반환
parseInt('10'); // 10
//10을 2진수로 해석하고 그 결과를 10진수 정수로 반환
parseInt('10', 2); // 2
//10을 8진수로 해석하고 그 결과를 10진수 정수로 반환
parseInt('10', 8); // 8
//10dmf 16진수로 해석하고 그 결과를 10진수 정수로 반환
parseInt('10', 16); // 16

//기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하고 싶을 떄는
//Number.prototype.toString 메서드 사용
const x1 = 15;

//10진수 15를 2진수로 변환하여 문자열로 반환
x1.toString(2); // '1111'
//문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환
parseInt(x1.toString(2), 2); // 15

//두 번째 인수로 진법을 나타내는 기수를 지정하지 않더라고
//0x, 0X로 시작하는 16진수 리터럴이라면 16진수로 해석하여 10진수 정수로 반환
parseInt('0xf'); // 15
parseInt('f', 16); // 15
//2, 8 진수는 0b 0o 해석 못함

//첫 번쨰 인수로 전달한 문자열의 첫 번쨰 문자가 해당 지수의 숫자로 변환될 수 없다면 NaN를 반환
parseInt('A0'); // NaN
parseInt('20', 2); // NaN
//문자열의 두번째 문자부터 해당 진수로 해석할 수 없는 문자는 무시
parseInt('1A0'); // 1
parseInt('102', 2); // 2
parseInt('58', 8); // 5
parseInt('F6', 16); // 15

//공백이 있을 경우 첫 번째 문자열만 해석하여 반환
parseInt('34 45 66'); // 34
parseInt('40 years'); // 40
parseInt('He was 40'); // NaN
parseInt(' 60 '); // 60

//2.6 encodeURI/decodeURI
//encodeURI함수는 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩
//인코딩이랑 URI 문자들을 이스케이프처리하는 것
//이스케이프 처리는 네트워크를 통해 정보를 고유할 떄 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환하는 것
//예를 들어, 특수 문자인 공백 문자는 %20, 한글 '가'는 %EC9E%90으로 인코딩

const uri = 'http://example.com?name=이웅모&job=programmer';
const enc = encodeURI(uri);
console.log(enc);
const dec = decodeURI(enc);
console.log(dec);

//2.7 encodeURIComponent / decodeURIComponent
//encodeURIComonent 함수는 URI 구성 요소를 인수로 전달받아 인코딩
//따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩
const uriComp = 'name=이웅모&job=programmer';
let enc1 = encodeURIComponent(uriComp);
console.log(enc1);

let dec1 = decodeURIComponent(enc1);
console.log(dec1);