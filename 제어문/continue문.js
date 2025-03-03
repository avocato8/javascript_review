//continue문
//반목문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동
var string = 'Hello World.';
var search = 'l';
var count = 0;

for(var i = 0; i < string.length; i++){
    //l 이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
    if(string[i] !== search) continue;
    count++;
}

console.log(count);

//String.prototype.match 메서드도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3

//continue문을 사용하지 않으면 if문 내에 코드를 작성해야 한다.
for(var i = 0; i < string.length; i++){
    if(string[i] === search){
        count++;
    }
}

//continue문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for(var i = 0; i < string.length; i++){
    if(string[i] !== search) continue;
    count++;
}