//prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체,
//constructor만이 소유하는 프로퍼티
(function(){}).hasOwnProperty('prototype'); // true
({}).hasOwnProperty('prototype'); // false