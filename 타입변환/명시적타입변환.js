//명시적으로 타입을 변경하는 방법에는
//표준 빌트인 생성자 함수(String, Number, Boolean) 호출
//빌트인 메서드 사용
//암묵적 타입 변환하는 방법이 있다.

//문자열 타입으로 변환
String(1); // '1'
String(NaN); // 'NaN'
String(Infinity); //'Infinity'

String(true); //'true'
String(false); //'false'

//Object.prototype.toString 메서드 사용
(1).toString(); // '1'
(NaN).toString(); // 'NaN'
(Infinity).toString(); //'Infinity'

(true).toString(); // 'true'
(false).toString(); // 'false'

//문자열 연결 연산자를 이용
1 + ''; // '1'
NaN + ''; // 'NaN'
Infinity + ''; //'Infinity'

true + ''; //'true'
false + ''; //'false'

//숫자 타입으로 변환
Number('0') // 0
Number('-1') // -1
Number('10.53') // 10.53

Number(true) // 1
Number(false)// 0

//parseInt, parseFloat (문자열만 변환 가능)
parseInt('0') // 0
parseInt('-1') //-1
parseFloat('10.53') //10.53

//단항 산술 연산자를 이용하는 방법
+'0' // 0
+'-1' // -1
+ '10.53' // 10.53

+true; //1
+false; //0

'0' * 1; //0
'-1' * 1; // -1
'10.53' * 1; // 10.53

true * 1; // 1
false * 1; // 0

//불리언 타입으로 변환
Boolean('x') // true
Boolean('') //false
Boolean('false')// true

Boolean(0); //false
Boolean(1); //true
Boolean(NaN); //false
Boolean(Infinity); //true

Boolean(null); //false

Boolean(undefined); //false

Boolean({}); //true
Boolean([]); //true

// ! 부정 논리 연산산자를 두번 사용하는 방법
!!'x'; //true
!!''; //false
!!'false'; //true

!!0; //false
!!1; //true
!!NaN; //false
!!Infinity; //true

!!null; //false

!!undefined; //false

!!{}; //true
!![]; //true