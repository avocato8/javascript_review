//클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.
class Person{}

//인스턴스 생성
const me = new Person();
console.log(me);


//클래스 표현식으로 정의된 클래스의 경우 다음과 같이 클래스를 가리키는 식별자를 사용해
//인스턴스를 생성하지 않고 기명 클래스 표현식의 클래스 이름(MyClass)을 사용해 인스턴스를 생성하면 에러가 발생
const Person2 = class MyClass{};

const me2 = new Person2();

//클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
console.log(MyClass); //ReferenceError

const you = new MyClass(); //ReferenceError