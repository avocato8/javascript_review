//프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만
//상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것

//상속을 통해 Animal 클래스를 확장한 Bird 클래스를 구현해보자.
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

//상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}
const bird = new Bird(1, 5);

console.log(bird); //Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); //true

console.log(bird.eat()); //eat
console.log(bird.move()); //move
console.log(bird.fly()); //fly

//extends 키워드
//수퍼(베이스/부모) 클래스
class Base {}

//서브(파생/자식) 클래스
class Dervied extends Base {}

//동적 상속
//extends 키워드는 클래스뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다.
//생성자 함수
function Base(a) {
  this.a = a;
}

//생성자 함수를 상속받는 서브클래스
class Derived extends Base {}
const derived = new Derived(1);
console.log(derived); // Derived {a: 1}

//extends 키워드 다음에는 클래스뿐만이 아니라 [[Construct]] 내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할 수 있다.
function Base1() {}

class Base2 {}

let condition = true;

//조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived2 extends (condition ? Base1 : Base2) {}
const derived2 = new Derived2();
console.log(derived2); // Derived2 {}
console.log(derived2 instanceof Base1);
console.log(derived2 instanceof Base2);

//서브 클래스의 constructor
//클래스에 constructor를 생략하면 클래스에 비어있는 constructor 가 암묵적으로 정의된다.
class Base3 {}

class Derived3 extends Base3 {}

//이 예제는 암묵적으로
class Base3 {
  constructor() {}
}
class Derived3 extends Base3 {
  constructor(...args) {
    super(...args);
  }
}

//super 키워드
//super 를 호출하면 수퍼클래스의 constructor를 호출한다.
//super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

//1. super 호출
class Base4 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
class Derived4 extends Base4 {
  //암묵적으로 constructor 정의된다.
  //   constructor(...args) {
  //     super(...args);
  //   }
}
const derived4 = new Derived4(1, 2);
console.log(derived4); //Derived4 {a: 1, b: 2}

class Base5 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
class Derived5 extends Base5 {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}
const derived5 = new Derived5(1, 2, 3);
console.log(derived5); // Derived5 {a: 1, b: 2, c: 3}
//이처럼 인스턴스 초기화를 위해 전달한 인수는 수퍼클래스와 서브클래스에 배분되고
//상속 관계의 두 클래스는 서로 협력하여 인스턴스를 생성

//super를 호출할 때 주의할 사항
//1. 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor는 반드시 super를 호출해야한다.
//2. 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
//3. super는 반드시 서브클래스의 constructor에서만 호출한다.

//2. super 참조
//메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
class Base6 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi! ${this.name}`;
  }
}
class Derived6 extends Base6 {
  sayHi() {
    return `${super.sayHi()}. how are you doing?`; //super는 Base6.prototype을 가리킴
  }
}
const derived6 = new Derived6("Lee");
console.log(derived6.sayHi()); //Hi! Lee. how are you doing?

//정적 메서드 내에서 super는 수퍼클래스의 정적 메서드를 가리킴
class Base7 {
  static sayHi() {
    return "Hi!";
  }
}
class Derived7 extends Base7 {
  static SayHi() {
    return `${super.sayHi()} how are you doing?`;
  }
}
console.log(Derived7.sayHi());

//상속 클래스의 인스턴스 생성 과정
class Retangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Retangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  //메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); //ColorRectangle{width: 2, height: 4, color: 'red'}

//상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
//오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red

//서브클래스 ColorRectangle이 new 연산자와 함께 호출되면 다음 과정을 통해 인스턴스를 생성한다.
//1. 서브클래스 super호출
//자바스크립트 엔진은 클래스를 평가할 때 수퍼클래스와 서브클래스를 구별하기 위해
//base 또는 Derived 를 값으로 갖는 내부 슬롯 [[ConstructorKind]]를 갖는다.
//이를 통해 수퍼클래스와 서브클래스의 new 연산자 동작이 구분된다.
//서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스 생성을 위임한다.
//이것이 바로 서브클래스의 constructor에서 반드시 super를 호출해야하는 이유다.

//2. 수퍼클래스의 인스턴스 생성과 this 바인딩
//수퍼클래스의 constructor 내부의 코드가 실행되기 이전에 암묵적으로 빈 객체를 생성한다.
//그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.
//  따라서 수퍼클래스 내부의 this는 생성된 인스턴스를 가리킨다.

//3. 수퍼클래스의 인스턴스 초기화
//수퍼클래스의 constructor가 실행되어 this에 바인딩되어있는 인스턴스를 초기화한다.
//즉 this에 바인딩되어있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화한다.

//4. 서브클래스 constructor로의 복귀와 this 바인딩
//super 호출이 종료되고 제어 흐름이 서브클래스 constructor로 돌아온다.
//이 때 super가 반환한 인스턴스가 this에 바인딩된다. 서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 사용

//5. 서브클래스의 인스턴스 초기화
//super 호출 이후, 서브클래스의 constructor 에 기술되어있는 인스턴스 초기화가 실행된다.

//6. 인스턴스 반환
//클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

//표준 빌트인 생성자 함수 확장
//String, Number, Array와 같은 표준 빌트인 객체도 extends 키워드를 사용하여 확장할 수 있다.
//Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  //중복된 배열 요소를 제거하고 반환
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}
const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); //MyArray(4) [1, 1, 2, 3]

console.log(myArray.uniq()); // MyArray(3)[1, 2, 3]
console.log(myArray.average()); //1.75
//Array 생성자 함수를 상속받아 확장한 MyArray클래스가 생성한 인스턴스는 Array.prototype과 MyArray.prototype의 모든 메서드를 사용할 수 있다.
//이 때 주의할 것은 Array.prototype의 메서드 중에서 map, filter와 같이 새로운 배열을 반환하는 메서드가
//MyArray 클래스의 인스턴스를 반환한다는 것이다.
