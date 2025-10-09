//Number.EPSILON
//1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이
//부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용
//Number.EPSILON은 약 2.22~ * 10^-16 정도
0.1 + 0.2; // 0.300000000000000000~4
function isEqual(a, b) {
  //a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정
  return Math.abs(a - b) < Number.EPSILON;
}
isEqual(0.1 + 0.2, 0.3); // true

//Number.MAX_VALUE
//자바스크립트에서 표현할 수 있는 가장 큰 양수 값
//1.7976931348623157 * 10^308
//이 보다 큰 숫자는 Infinity
Infinity > Number.MAX_VALUE; // true

//Number.MIN_VALUE
//자바스크립트에서 표현할 수 있는 가장 작은 양수 값
//5e-324
//이보다 작은 숫자는 0
Number.MIN_VALUE < 0; // true

//Number.MAX_SAFE_INTEGER
//자바스크립트에서 안전하기 표현할 수 있는 가장 큰 정수값
Number.MAX_SAFE_INTEGER; //9007199254740991

//Number.MIN_SAFE_INTEGER
//자바스크립트에서 안전하기 표현할 수 있는 가장 작은 정수값
Number.MIN_SAFE_INTERGER; //-9007199254740991

//Number.POSITIVE_INFINITY
//양의 무한대를 나타내는 숫자값 Infinity
Number.POSITIVE_INFINITY; // Infinity

//Number.NEGATIVE_INFINITY
//음의 무한대를 나타내는 숫자값 Infinity
Number.NEGATIVE_INFINITY; // -Infinity

//Number.NaN
//숫자가 아님을 나타내는 숫자값
Number.NaN; // NaN
