const o = { x: { y: 1 } };

//얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고
//깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼
//완전한 복사본을 만든다.

//얕은 복사
const c1 = { ...o };
console.log(c1 === o); //false
console.log(c1.x === o.x); //true

//깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === 0); //false
console.log(c2.x === o.x); //false