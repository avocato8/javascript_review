//break문 - 레이블 문, 반복문, switch문의 코드 블록을 탈출한다.
foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');

//중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for 문을 탈출하여 외부 for문으로 진입
//외부 for문을 탈출하려면 레이블 문을 사용
outer: for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done!');
//레이블 문은 중첩된 for문 외부로 탈출할 때 유용하지만 그 밖에는 권장하지 않는다.

//문자열에서 특정 문자의 인덱스를 검색하는 예
var string = 'Hello World.';
var search = 'l';
var index;

for(var i = 0; i < string.length; i++){
    //문자열의 개별 문자가 'l'이면
    if(string[i] === search){
        index = i;
        break;
    }
}

console.log(index); //2
console.log(string.indexOf(search));



