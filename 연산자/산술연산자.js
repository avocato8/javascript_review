//이항 산술 연산자
5 + 2; //7
5 - 2; //3
5 * 2; //10
5 / 2; //2.5
5 % 2; //1

//단항 산술 연산자
var x = 1;
x++;
console.log(x); //2

//선할당 후증가
result = x++;
console.log(result, x); //2, 3

//선증가 후할당
result = ++x;
console.log(result, x); //4, 4

//문자열을 숫자로 타입 변환
x = '1';
console.log(+x);

//불리언 값을 숫자로 타입 변환
x = true;
console.log(+x);

//문자열을 숫자로 타입 변환할 수 없으므로 NaN반환
x = 'hello';
console.log(+x); //NaN