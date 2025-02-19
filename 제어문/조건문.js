var num = 2;
var kind;

//if문
if (num > 0) {
  kind = "양수";
}
console.log(kind); //양수

//if...else
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수";
}
console.log(kind); //양수

//if... else if문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind); //양수

//중괄호 생략
if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";
console.log(kind); //양수

//삼항조건연산자로 변경 가능
var result = num % 2 ? "홀수" : "짝수";
console.log(result); //짝수

var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind); //양수

//swtich
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}
console.log(days);
