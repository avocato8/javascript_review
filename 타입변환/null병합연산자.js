//좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고,
//그렇지 않으면 좌항의 피연산자를 반환한다.
//변수에 기본값을 설정할 때 유용
var foo = '' ?? 'default string';

foo = '' || 'default string';