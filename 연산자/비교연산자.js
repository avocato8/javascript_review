// == 동등비교
5 == 5; //true
5 == '5'; //true

// === 일치비교
5 === 5; //true
5 === '5'; //false
NaN === NaN; //false

//NaN는 자신과 일치하지 않는 유일한 값
//숫자가 NaN인지 조사하려면 Number.isNaN를 사용
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN(1 + undefined); //true

//양의 0과 음의 0은 true를 반환
0 === -0; //true
0 == -0; //true

//ES6 에서는 Object.is 메서드로 예측가능한 비교 결과 반환
-0 === +0; //true
Object.is(-0, +0);

NaN === NaN; //false
Object.is(NaN, NaN); //true
