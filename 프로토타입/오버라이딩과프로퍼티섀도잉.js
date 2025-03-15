const Person = (function () {
  //생성자 함수
  function Person(name) {
    this.name = name;
  }

  //프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  //생성자 함수를 반환환
  return Person;
})();

const me = new Person("Lee");

//인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

//인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello(); //Hey! My name is Lee

//프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라
//프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가
//이 때 인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩
//프로토타입 메서드 sayHello는 가려진다
//이를 프로퍼티 섀도잉이라 한다.

//인스턴스 메서드를 삭제하면
delete me.sayHello;
me.sayHello(); //Hi! My name is Lee

//하위 객체롤 통해 프로토타입 메서드는 삭제할 수 없다.
delete me.sayHello;
me.sayHello(); //Hi! My name is Lee

//프로토타입 메서드에 직접 접근
delete Person.prototype.sayHello;
me.sayHello(); // TypeError