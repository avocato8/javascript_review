//프로퍼티에 접근하는 방법에는
//마침표 표기법
//대괄호 표기법이 있다.
var person = {
  name: "Lee",
  "last-name": "Lee",
};

console.log(person.name);
console.log(person["name"]);

//프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않으면,
//대괄호 표기법을 사용
console.log(person["last-name"]);
