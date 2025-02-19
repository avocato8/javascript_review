//조건식 ? 조건식이 true일떄 반환할 값 : 조건식이 false일때 반환할 값
var x = 2;
var result = x % 2 ? '홀수' : '짝수';

console.log(result); //짝수

var result;

//if문과 동일
//하지만 삼항연산자는 값처럼 사용 가능
//조건에 따라 어떤 값을 결정할떄 삼항연산자 사용용
if(x % 2) result = '홀수';
else result = '짝수';

console.log(result);

