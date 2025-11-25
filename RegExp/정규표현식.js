//일정한 패턴을 가진 무자열의 집합을 표현하기 위해 사용하는 형식 언어
const tel = "010-1234-5678";
const regExp = /^\d{3}-\d{4}-\d{4}$/;
regExp.test(tel); //false

//정규표현식의 생성
const target = "Is this all there is?";
//정규 표현식 객체를 생성하기 위해서는

//1. 정규 표현식 리터럴,
//패턴과 플래그로 구성
//패턴 is
//플래그 i -> 대소문자를 구별하지 않고 검색
const regexp = /is/i;
regexp.test(target); // true

//2. RegExp 생성자 함수를 사용
// new RegExp(pattern[, flags])
const regexp1 = new RegExp(/is/i);
regexp1.test(target); // true
//동적으로 RegExp 객체를 생성할 수도 있다.
const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;
count("Is this all there is?", "is"); // 3
count("Is this all there is?", "xx"); // 0
