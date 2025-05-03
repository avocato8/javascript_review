var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

//0, 1, 2 를 반환할 것으로 기대했지만 안됨!

//for 문의 변수 선언문에서 var 키워드로 선언한 i 변수는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 갖기 떄문에 전역 변수
//따라서 funcs 배열의 요소로 추가한 함수를 호출하면 전역 변수 i를 참조하여 i의 값 3이 출력된다.

//클로저를 사용해 바르게 동작하도록 해보자!
//즉시 실행 함수 사용
var funcs1 = [];
for (var i = 0; i < 3; i++) {
  funcs1[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; i < funcs1.length; j++) {
  console.log(funcs1[j]());
}
//let 사용
const func2 = [];
for (let i = 0; i < 3; i++) {
  funcs2[i] = function () {
    return i;
  };
}
for (let i = 0; i < func2.length; i++) {
  console.log(func2[i]());
}
