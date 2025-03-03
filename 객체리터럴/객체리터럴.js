//C++ 이나 자바같은 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고
//필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성


//자바스크립트는 프로토타입 기반 객체지향 언어로써 다양한 객체 생성 방법을 지원

//객체 리터럴
var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: f}