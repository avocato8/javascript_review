//ES6에서 추가된 7번쨰 타입
//변경 불가능한 원시 타입
//다른 값과 중복되지 않는 유일무이한 값
//객체의 유일한 프로퍼티 키를만들기 위해 사용

var key = Symbol('key');
console.log(typeof key);

var obj = {};

//이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]);
console.log(obj);