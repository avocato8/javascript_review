//문자열이나 숫자, 불리언 등의 원시값이 있는데
//String, Number, Boolean 등 표준 빌트인 생성자 함수가 존재하는 이유?

const str = "hello";

//원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

//자바스크립트 엔진이 원시값을 일시적으로 연관된 객체로 변환해주기 때문
//문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다.

const str2 = "hi";

//원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환
console.log(str.length); // 2
console.log(str.toUpperCase()); // HI

//래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str); // string

//이 때 문자열 래퍼 객체인 String 생성자 함수의 인스턴스는 String.prototype 메서드를 상속받아 사용할 수 있다.
//그 후 래퍼 객체읜 처리가 종료되면 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값으로 원래의 상태
//식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.

//문자열, 숫자, 불리언, 심벌 이외의 원시값, 즉 null, undefined는 래퍼 객체를 생성하지 않는다.