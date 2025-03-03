//옵셔널체이닝연산자 ?. 는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var elem = null;
var value = elem?.value;

//옵셔널체이닝연산자가 도입되기 이전에는 논리 연산자를 && 를 이용한 단축 평가를 통해 변수가 null인지 undefined인지 확인했다.
value = elem && elem.value;