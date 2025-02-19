var x;

//할당 연산자는 변수 값이 변하는 부수 효과가 있다.
x = 1;
console.log(x); //1

//증가/감소 연산자는 피연산자의 값을 변경하는 부수 효과가 있다.
x++;
console.log(x); //2

//delete연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다,
var o = { a: 1 };
delete o.a;
console.log(o); //{}