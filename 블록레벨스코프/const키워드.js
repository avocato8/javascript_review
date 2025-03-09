//선언과 초기화
//const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화
const foo = 1; 
// const foo; // syntaxError 발생

//const 키워드로 선언한변수는 let 키워드로 선언한 변수와 마찬가지로
// 블록 레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작
{
    console.log(foo); //ReferenceError
    const foo = 1;
    console.log(foo); // 1
}

//재할당 금지
foo = 2; //TypeError

//상수
//const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다.
//세전 가격
let preTaxPrice = 100;

//세후 가격
// 0.1의 의미를 명확히 알기 어렵기 떄문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
console.log(afterTaxPrice); // 110

const TAX_RATE = 0.1;

let preTaxPrice2 = 100;

let afterTaxPrice2 = preTaxPrice2 + (preTaxPrice2 * TAX_RATE);
console.log(afterTaxPrice2); // 110

//const 키워드와 객체
//const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
    name: 'Lee'
}
person.name = 'Kim';
console.log(person); // {name: 'Kim'}