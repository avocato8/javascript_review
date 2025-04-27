//매서드 내부의 this에는 매서드를 호출한 객체가 바인딩
const person = {
  name: "Lee",
  getName() {
    //메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    return this.name;
  },
};

console.log(person.getName()); // Lee

const anotherPerson = {
  name: "Kim",
};
//getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

//getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // Kim
