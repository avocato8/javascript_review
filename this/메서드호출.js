//매서드 내부의 this에는 매서드를 호출한 객체가 바인딩
const person = {
  name: "Lee",
  getName() {
    //메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    return this.name;
  },
};

console.log(person.getName()); // Lee
//메서드는 프로퍼티에 바인딩된 함수다.
//즉 person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라
//독립적으로 존재하는 별도의 객체다.

const anotherPerson = {
  name: "Kim",
};
//getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

//getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // Kim

//getName 메서드를 변수에 할당
const getName = person.getName;

//getName 메서드를 일반 함수로 호출
console.log(getName()); // ''
//일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
//브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 '' 이다.
//Nodejs 환경에서는 this.name은 undefined 이다.

//프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마친가지로 해당 메서드를 호출한 객체에 바인딩된다.
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
const me = new Person("Lee");

//getName 메서드를 호출한 객체는 me다.
console.log(me.getName());

Person.prototype.name = "Kim";

//getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); // Kim

