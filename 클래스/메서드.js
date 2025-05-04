//클래스 몸체에는 0개 이상의 메서드만 선언할 수 있다.
//클래스 몸체에서 정의할 수 있는 메서드는
//constructor, 프로토타입 메서드, 정적 메서드가 있다.

class Person {
  //생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }
}

//클래스는 함수다.
console.log(typeof Person);
console.dir(Person);

//prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 프로퍼티는
//클래스 자신을 가리키고 있다.
//이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미

const me = new Person("Lee");
console.log(me);
//Person 클래스의 constructor 내부에서 this에 추가한 name 프로퍼티가 클래스가 생성한 인스턴스의 프로퍼티로
//추가된 것을 알 수 있다.
//즉, 생성자 함수와 마찬가지로 constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다.

//클래스
class Person2 {
  //생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }
}

//생성자 함수
function Person3(name) {
  //인스턴스 생성 및 초기화
  this.name = name;
}

//클래스가 평가되어 생성된 함수 객체나 클래스가 생성한 인스턴스 어디에도
//constructor 메서드가 보이지 않는다.
//constructor 는 메서드로 해석되는 것인 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다.

//constructor는 생성자 함수와 유사하지만 몇 가지 차이가 있다.
//1. consturctor는 클래스 내에 최대 한 개만 존재할 수 있다.
class Person4{
    constructor(){}
    constructor(){}
}
//SyntaxError

//2. constructor는 생략할 수 있다.
class Person5{}
//생략하면 클래스에 빈 constructor가 암묵적으로 정의된다.
//constructor를 생략한 클래스는 빈 constructor에 의해 빈 객체를 생성한다.

//인스턴스를 생성할 때 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 constructor에
//매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다.
class Person6{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}
const me6 = new Person6('Lee', 'Seoul');
console.log(me6);

//constructor는 별도의 반환문을 가지지 말아야 한다.
//new 연산자와 함께 클래스가 호출되면 생성자 함수와 동일하게 암묵적으로 this, 즉 인스턴스를 반환하기 때문이다.
class Person7{
    constructor(name){
        this.name = name;

        //명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
        return {};
    }
}

const me7 = new Person7('Lee');
console.log(me7); // {}

class Person8{
    constructor(name){
        this.name = name;

        //명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
        return 100;
    }
}

const me8 = new Person8('Lee');
console.log(me8); // Person8 {name: 'Lee'}
//따라서 반드시 constructor 내부에서는 return문을 생략해야 한다.

//프로토타입 메서드
//생성자 함수를 사용하여 인스턴스를 생성하는 경우 프로토타입 매서드를 생성하기 위해서는 다음과 같이 명시적으로 프로토타입에 메서드를 추가해야 한다.
//생성자 함수
function Person9(name){
    this.name = name;
}
Person9.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}`);
}
const me9 = new Person9('Lee');
me9.sayHi(); //Hi! My name is Lee

//클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도
//기본적으로 프로토타입 메서드가 된다.
class Person10{
    //생성자
    constructor(name){
        this.name = name;
    }

    //프로토타입 메서드
    sayHi(){
        console.log(`Hi! My name is ${this.name}`);
    }
}
const me10 = new Person10('Lee');
me10.sayHi(); //Hi! My name is Lee

//생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.

//정적 메서드
//생성자 함수의 경우 명시적으로 생성자 함수에 메서드를 추가해야 한다.
function Person11(name){
    this.name = name;
}
Person11.sayHi = function(){
    console.log('Hi!');
}
//정적 메서드 호출
Person11.sayHi(); // Hi!

//클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드가 된다.
class Person12{
    constructor(name){
        this.name = name;
    }
    static sayHi(){
        console.log('Hi!');
    }
}
//정적 메서드는 클래스에 바인딩된 메서드가 된다.
//정적 메서드는 클래스로 호출한다.
//인스턴스 없이도 호출할 수 있다.
Person12.sayHi();

//정적 메서드와 프로토타입 메서드의 차이
//1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
//2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
//3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.

class Square{
    //정적 메서드
    static area(width, height){
        return width * height;
    }
}

console.log(Square.area(10, 10)); // 100

class Square2{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}
const square2 = new Square2(10, 10);
console.log(square2.area()); // 100

//표준 빌트인 객체인 Math, Number, JSON, Object 등은 다양한 정적 메서드를 가지고 있다.
//이처럼 클래스 또는 생성자 함수를 하나의 네임스페이스로 사용하여 정적 메서드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 관련 함수들을 구조화할 수 있는 효과가 있다.

//클래스에서 정의한 메서드의 특징
//function 키워드를 생략한 메서드 축약 표현을 사용한다.
//객체 리터럴과는 다르게 클래스에 메서드를 정의할 떄는 콤마가 필요없다.
//암묵적으로 strict mode로 실행된다.
//열거할 수 없다. 프로퍼티 어트리뷰트 [[Enumerable]]값이 false이다.
//new 연산자와 호출할 수 없다.