//Number 객체는 생성자 함수 객체.
//Number 생성자 함수에 인수를 전달하지 않고 new 연산자와 함꼐 호출하면
//[[NumberData]] 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성
const numObj = new Number();
console.log(numObj);
const numObj1 = new Number(10);
console.log(numObj1); //Number {{[PrimitiveValue]} : 10}
