//피연산자가 문자열 타입이어야 하는 문맥
'10' + 2 // '102'

//피연산자가 숫자 타입이어야 하는 문맥
5 * '10' // 50

//피연산자가 불리언 타입이어야 하는 문맥
!0 // true
if(1){}

//문자열 타입으로 변환
1 + '2' // '12'
`1 + 1 = ${1 + 1}` // '1 + 1 = 2'
0 + '' // '0'
-0 + '' // '0'
1 + '' //'1'
-1 + '' // '-1'
NaN + '' // 'NaN'
Infinity + '' // 'Infinity'
-Infinity + '' // '-Infinity'

true + '' //'true'
false + '' //'false'

null + '' //'null'

undefined + '' //'undiefined'

(Symbol()) + '' //typeError

({}) + '' //'[object object]'
Math + '' //'[object Math]'
[] + '' // ''
[10, 20] + '' //'10, 20'
(function(){}) + '' //'function(){}'
Array + '' //'function Array() { [native code] }'

//숫자 타입으로 변환
//산술 연산자의 역할은 숫자 값을 만드는 것이므로, 피연산자는 모두 숫자타입
1 - '1' // 0
1 * '10' // 10
1 / 'one' //NaN 변환할 수 없는 경우 

'1' > 0 // true 비교 연산자의 역할은 불리언 값을 만드는 것이므로, 숫자 타입으로 암묵적 타입 변환

//  + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행
+ ''  // 0
+ '0' // 0
+ '1' // 1
+ 'string' // NaN

+true // 1
+false // 0

+null // 0

+undefined // NaN

+Symbol() // TypeError

+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) //NaN

//불리언타입으로 변환
//제어문 또는 삼항 조건 연산자의 조건식을 불리언 값으로 평가
//따라서 불리언 타입으로 암묵적 타입 변환환
if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
// 2 4

function isTruthy(v){
    return !!v;
}

//모두 true 반환
isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);
//모두 false 반환
isTruthy(false);
isTruthy(undefined);
isTruthy(null);
isTruthy(0);
isTruthy(NaN);
isTruthy('');

