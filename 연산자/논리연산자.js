// OR 연산자
true || true; //true
true || false; //true
false || true; //true
false || false; //false

//AND 연산자
true && true; //true
true && false; //false
false && true; //false
false && false; //false

//부정 연산자
!true; //false
!false; //true
!0; //true
!'Hello'; //false

//논리합과 논리곱 연산자는 언제나 2개의 피연산자 중 한쪽으로 평가
'Cat' && 'Dog'; //'Dog'