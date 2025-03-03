//논리 연산자를 사용한 단축 평가
//논리 연산자 표현식은 언제나 2개의 피연산자 중 하나로 평가
//좌항에서 우항으로 평가가 진행
//평가 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략략
"Cat" || "Dog"; // "Cat"
false || "Dog"; // 'Dog'
"Cat" || false; // 'Cat'

"Cat" && "Dog"; // 'Dog'
false && "Dog"; // false
"Cat" && false; // false

//단축 평가를 사용하면 if문을 대체할 수 있다.
var done = true;
var message = '';
if(done) message = '완료';

message = done && '완료';

//조건이 Falsy 값일떄 무언가를 해야 한다면 || 으로 if문을 대체할 수 있다. 
done = false;
message = '';
if(!done) message = '미완료';

message = done || '미완료';

//삼항 조건 연산자로 if else 문을 대체할 수 있다.
done = true;
message = '';
if(done) message = '완료';
else message = '미완료';

message = done ? '완료' : '미완료';
console.log(message);

//객체를 가리키기를 기대하는 변수가 null, undefined 인지 확인하고 프로퍼티를 참조할 때
var elem = null;
var value = elem.value; //TypeError

//이 때 단축평가를 사용
elem = null;
value = elem && elem.value; //null

//함수 매개변수에 기본값을 설정할 때
//함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이 때 단축 평가를 사용해
//매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
function getStringLength(str){
    str = str || '';
    return str.length;
}
getStringLength(); // 0
getStringLegnth('hi'); //2
//ES6의 매개변수 기본값 설정
function getStringLength2(str = ''){
    return str.length;
}
getStringLength2(); // 0
getStringLength2('hi') // 2

