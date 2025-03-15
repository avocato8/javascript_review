//일급 객체란
//1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능
//2. 변수나 자료구조에 저장가능
//3. 함수의 매개변수에 전달할 수 있다.
//4. 함수의 반환값으로 사용가능

//자바스크립트의 함수는 위 조건을 모두 만족하므로 일급 객체
//1.함수는 무명의 리터럴로 생성할 수 있다.
//2. 함수는 변수에 저장할 수 있다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

//2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

//4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;
  return function () {
    num = aux(num);
    return num;
  };
}

//3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); //1
console.log(increaser()); //2

//함수가 일급객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미
//함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 