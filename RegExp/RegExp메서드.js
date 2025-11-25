//1. RegExp.prototype.exec
//exec 메서드는 인수롤 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 결과를 배열로 반환
const target1 = "Is this all there is?";
const regExp1 = /is/;
regExp1.exec(target1); // ["is", index: 5, input: "Is this all there is?", groups: undefined]
//문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번쨰 매칭 결과만 반환

//2. RegExp.prototype.test
//test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환
const target2 = "Is this all there is?";
const regExp2 = /is/;
regExp2.test(target2); // true

//3. String.prototype.match
//match메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환
const target3 = "Is this all there is?";
const regExp3 = /is/;
target3.match(regExp3); //["is", index: 5, input: "is this all there is?", groups: undefined]
//문자열 내의 모든 패턴을 검색하는 g플래그를 지정하면 모든 매칭 결과를 배열로 반환