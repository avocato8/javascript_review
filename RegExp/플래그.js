//i(ignore case - 대소문자를 구별하지 않고 패턴 검색)
//g(Global - 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색)
//m(Multi line) - 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
const target = "Is this all there is?";

//target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색
target.match(/is/); // ["is", index: 5, input: "Is this all there is?", groups: undefined]

//target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한번만 검색
target.match(/is/i); // ["Is", index: 0, input: "Is this all there is?", groups: undefined]

//target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색
target.match(/is/g); //["is", "is"]

//target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색
target.match(/is/gi); // ["Is", "is", "is"]
