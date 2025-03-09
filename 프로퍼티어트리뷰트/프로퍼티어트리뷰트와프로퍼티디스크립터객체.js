//자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는
//프로퍼티 어트리뷰트를 기본값으로 자동 정의
//프로퍼티의 상태란 프로퍼티의 값(value), 값의 갱신 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.

const person = {
  name: "Lee",
};
//Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는
//프로퍼티 디스크립터 객체를 반환
console.log(Object.getOwnPropertyDescriptor(person, "name"));

//ES8에서 도입된 Object.getOwnPropertyDiescriptors 메서드는 모든 프로퍼티의
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환
person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));