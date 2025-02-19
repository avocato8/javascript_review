//for문
for (var i = 0; i < 2; i++) {
  console.log(i);
}

//for문 무한루프
// for(;;){}

//중첩for문
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

//while문
var count = 0;
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

//while문 무한루프
while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
}

// do while문
count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);

//break문 - 레이블 문, 반복문, switch문의 코드 블록을 탈출한다.
foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');