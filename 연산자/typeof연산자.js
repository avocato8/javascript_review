//피연산자의 데이터 타입을 문자열로 반환

typeof '' // string
typeof 1 // number
typeof NaN //number
typeof true //boolean
typeof undefined //undefined
typeof Symbol() //symbol
typeof null //object
typeof [] //object
typeof {} //object
typeof new Date() //object
typeof /test/gi //object
typeof function(){} //function

//값이 null타입인지 확인할 때는 일치 연산자(===) 사용
var foo = null;
typeof foo === null; //false
foo === null; //true

//선언하지 않는 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined 반환
typeof undeclared; //undefined