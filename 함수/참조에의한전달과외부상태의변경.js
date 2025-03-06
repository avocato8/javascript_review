function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}

//외부 상태
var num = 100;
var person = {name: 'Lee'};

console.log(num); // 199
console.log(person); // {name: 'Lee'}

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달
changeVal(num, person);

//원시값은 원본이 훼손되지 않는다.
//객체는 원본이 훼손된다.
console.log(num); // 100
console.log(person); // {name: 'Kim'}

//객체의 변경을 추적하려면 옵저버 패턴 등을 통해 객체의 참조를 공유하는
//모든 이들에게 변경 사실을 통지하고 이에 대처하는 추가 대응이 필요
//다른 방법은 객체를 불변 객체로 만들어 사용
// 이를 통해 객체의 상태 변경을 원천봉쇄하고, 상태 변경이 필요한 경우에는
// 깊은 복사를 통해 새로운 객체를 생성하고 재할당을 통해 교체