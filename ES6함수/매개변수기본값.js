//함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 바람직하지만,
// 그렇지 않은 경우에도 에러가 발생하지는 않는다.
//자바스크립트 엔진이 매개변수의 개수와 인수의 개수를 체크하지 않기 때문이다.

function sum(x, y) {
  return x + y;
}
console.log(sum(1)); // NaN

//따라서 다음 예제와 같이 매개변수에 인수가 전달되었는지 확인하여 인수가 전달되지 않은 경우
//매개변수에 기본값을 할당할 필요가 있다.
function sum1(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}
console.log(sum1(1, 2)); // 3
console.log(sum1(1)); // 1

//ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화
function sum2(x = 0, y = 0) {
  return x + y;
}
console.log(sum2(1, 2)); // 3
console.log(sum2(1)); //1

//매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우과 undefined를 전달한 경우에만 유효
function logName(name = 'Lee'){
    console.log(name);
}

logName(); // Lee
logName(undefined); // Lee
logName(null); //null

//rest파라미터에는 기본값을 지정할 수 없다.
function foo(...rest = []){
    console.log(rest); //SyntaxError
}

//매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 나타내는 
// 함수 객체의 length 프로퍼티와 arguments 객체에 영향을 주지 않는다.
function sum3(x ,y = 0){
    console.log(arguments)
}
console.log(sum3.length); // 1
sum3(1); // Arguments {'0': 1}
sum3(1, 2); // Arguments { '0': 1, '1': 2} 
